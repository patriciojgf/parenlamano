import os, time, json
from youtube_transcript_api import YouTubeTranscriptApi

PREF=['es','es-419','es-ES','es-US','en']
api=YouTubeTranscriptApi()
root=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
outdir=os.path.join(root,'transcripts')
rows=[l.rstrip('\n').split('\t') for l in open(os.path.join(outdir,'_index.tsv'),encoding='utf-8') if l.strip()]

def missing():
    m=[]
    for vid,cat,title in rows:
        p=os.path.join(outdir,vid+'.txt')
        if not (os.path.exists(p) and os.path.getsize(p)>0): m.append(vid)
    return m

START=time.time(); MAX=80*60   # hasta 80 min
DELAY_OK=14                     # pausa entre descargas exitosas
COOLDOWN=300                    # espera si la IP sigue bloqueada
dead=set()                      # videos sin transcripción (disabled/unavailable)

sweep=0
while True:
    todo=[v for v in missing() if v not in dead]
    if not todo:
        print("LISTO: no quedan pendientes", flush=True); break
    if time.time()-START>MAX:
        print(f"corte por tiempo, quedan {len(todo)}: {todo}", flush=True); break
    sweep+=1
    print(f"--- tanda {sweep}: {len(todo)} pendientes ---", flush=True)
    blocked=False
    for vid in todo:
        try:
            try:
                fetched=api.fetch(vid,languages=PREF); lang=getattr(fetched,'language_code','?')
            except Exception as e:
                if 'IpBlocked' in type(e).__name__ or 'RequestBlocked' in type(e).__name__: raise
                tl=api.list(vid)
                try: t=tl.find_transcript(PREF)
                except Exception:
                    t=None
                    for c in tl: t=c; break
                if t is None: raise
                lang=t.language_code; fetched=t.fetch()
            text=" ".join(s.text for s in fetched).replace('\n',' ').strip()
            open(os.path.join(outdir,vid+'.txt'),'w',encoding='utf-8').write(text)
            print(f"  OK {vid} {lang} {len(text)}c", flush=True)
            time.sleep(DELAY_OK)
        except Exception as e:
            n=type(e).__name__
            if 'IpBlocked' in n or 'RequestBlocked' in n:
                print(f"  IP bloqueada en {vid}; espero {COOLDOWN}s", flush=True)
                blocked=True; break
            if 'Disabled' in n or 'Unavailable' in n or 'NoTranscript' in n:
                print(f"  SIN transcripción {vid} ({n}) -> descarto", flush=True)
                dead.add(vid)
            else:
                print(f"  error {vid}: {n} {str(e)[:80]}", flush=True); time.sleep(5)
    if blocked:
        time.sleep(COOLDOWN)

print(f"\nRESUMEN: {len(missing())} sin bajar, descartados {sorted(dead)}", flush=True)
