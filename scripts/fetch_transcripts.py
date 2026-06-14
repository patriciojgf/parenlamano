import sys, os, time, json
from youtube_transcript_api import YouTubeTranscriptApi

PREF = ['es','es-419','es-ES','es-US','en']
api = YouTubeTranscriptApi()
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
idx = os.path.join(root, 'transcripts', '_index.tsv')
outdir = os.path.join(root, 'transcripts')

rows = [l.rstrip('\n').split('\t') for l in open(idx, encoding='utf-8') if l.strip()]
log = []
for i,(vid,cat,title) in enumerate(rows,1):
    out = os.path.join(outdir, vid+'.txt')
    if os.path.exists(out) and os.path.getsize(out) > 0:
        log.append((vid,'skip','-',os.path.getsize(out)))
        print(f"[{i}/{len(rows)}] {vid} skip", flush=True)
        continue
    lang='?'; status='ok'; text=''
    for attempt in range(3):
        try:
            try:
                fetched = api.fetch(vid, languages=PREF)
                lang = getattr(fetched,'language_code','?')
            except Exception:
                tl = api.list(vid)
                t = None
                # preferir manual es, luego generado es, luego cualquiera
                try: t = tl.find_transcript(PREF)
                except Exception:
                    for cand in tl:
                        t = cand; break
                lang = t.language_code
                fetched = t.fetch()
            text = " ".join(s.text for s in fetched).replace('\n',' ').strip()
            break
        except Exception as e:
            status = type(e).__name__+': '+str(e)[:120]
            time.sleep(2*(attempt+1))
    if text:
        open(out,'w',encoding='utf-8').write(text)
        status='ok'
        print(f"[{i}/{len(rows)}] {vid} OK {lang} {len(text)}c", flush=True)
    else:
        print(f"[{i}/{len(rows)}] {vid} FALLO {status}", flush=True)
    log.append((vid,status,lang,len(text)))
    time.sleep(1.2)

json.dump([{'id':v,'status':s,'lang':l,'len':n} for v,s,l,n in log],
          open(os.path.join(outdir,'_log.json'),'w'), ensure_ascii=False, indent=1)
ok = sum(1 for _,s,_,_ in log if s in ('ok','skip'))
print(f"\n=== {ok}/{len(rows)} con transcripción ===", flush=True)
