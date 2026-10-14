export default function GlobalFooter({settings={}}){
  if(String(settings.footer_enabled||'0')!=='1') return null;
  const sticky=(settings.footer_mode||'sticky')==='sticky';
  const url=settings.footer_url||'#';
  const text=settings.footer_text||'কল করুন';
  const height=Math.max(44,Math.min(120,Number(settings.footer_height||60)));
  const radius=Math.max(0,Math.min(40,Number(settings.footer_radius||14)));
  const fontSize=Math.max(12,Math.min(36,Number(settings.footer_font_size||19)));
  return <div className={`lc-global-footer ${sticky?'sticky':'normal'}`}>
    <a href={url} style={{minHeight:`${height}px`,background:settings.footer_bg||'#087BC1',color:settings.footer_color||'#fff',borderRadius:`${radius}px`,fontSize:`${fontSize}px`}}>{text}</a>
  </div>;
}
