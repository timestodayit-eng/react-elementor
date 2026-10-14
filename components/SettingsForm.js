'use client';
import { useState } from 'react';
export default function SettingsForm({initial={}}){
  const [form,setForm]=useState(initial); const [saving,setSaving]=useState(false);
  const set=(k,v)=>setForm(x=>({...x,[k]:v}));
  async function save(){setSaving(true);const res=await fetch('/api/settings',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});const data=await res.json();setSaving(false);if(!res.ok)return alert(data.error||'Save failed');alert(`Saved. GTM: ${data.gtm_id||'none'}`)}
  return <div className="grid two">
    <div className="card"><h2>Analytics IDs</h2><p className="muted">Loaded on every published landing page, never on the admin dashboard.</p>
      <label className="label">Google Tag Manager code or ID</label><textarea className="textarea codearea" value={form.gtm_input||''} onChange={e=>set('gtm_input',e.target.value)} placeholder="GTM-XXXXXXX or full GTM snippet"/>
      <label className="label">Meta Pixel ID</label><input className="input" value={form.meta_pixel_id||''} onChange={e=>set('meta_pixel_id',e.target.value)} placeholder="123456789012345"/>
      <label className="label">GA4 Measurement ID</label><input className="input" value={form.ga4_id||''} onChange={e=>set('ga4_id',e.target.value)} placeholder="G-XXXXXXXXXX"/>
    </div>
    <div className="card"><h2>Invisible Global Custom Code</h2><p className="muted">Advanced. Use for verification tags, trusted scripts, chat widgets or other global code.</p>
      <label className="label">HEAD code</label><textarea className="textarea codearea" value={form.global_head_code||''} onChange={e=>set('global_head_code',e.target.value)} placeholder="<!-- runs on all published pages -->"/>
      <label className="label">BODY start code</label><textarea className="textarea codearea" value={form.global_body_start_code||''} onChange={e=>set('global_body_start_code',e.target.value)}/>
      <label className="label">BODY end code</label><textarea className="textarea codearea" value={form.global_body_end_code||''} onChange={e=>set('global_body_end_code',e.target.value)}/>
      <div className="notice" style={{marginTop:12}}>Only paste code you trust. These fields execute on public landing pages.</div>
    </div>
    <div className="card"><h2>Global Footer / Sticky CTA</h2><p className="muted">Editable footer shown across published landing pages. Disable it for pages that do not need a sticky CTA.</p>
      <label className="label">Enable footer</label><select className="select" value={form.footer_enabled||'0'} onChange={e=>set('footer_enabled',e.target.value)}><option value="0">Disabled</option><option value="1">Enabled</option></select>
      <label className="label">Mode</label><select className="select" value={form.footer_mode||'sticky'} onChange={e=>set('footer_mode',e.target.value)}><option value="sticky">Sticky bottom</option><option value="normal">Normal footer</option></select>
      <label className="label">Button text</label><input className="input" value={form.footer_text||'কল করুন'} onChange={e=>set('footer_text',e.target.value)}/>
      <label className="label">Phone number / URL</label><input className="input" value={form.footer_url||''} onChange={e=>set('footer_url',e.target.value)} placeholder="tel:+8801XXXXXXXXX"/>
      <div className="grid two compact"><div><label className="label">Background</label><input className="input" value={form.footer_bg||'#087BC1'} onChange={e=>set('footer_bg',e.target.value)}/></div><div><label className="label">Text color</label><input className="input" value={form.footer_color||'#ffffff'} onChange={e=>set('footer_color',e.target.value)}/></div></div>
      <label className="label">Height (px)</label><input className="input" type="number" min="44" max="120" value={form.footer_height||60} onChange={e=>set('footer_height',e.target.value)}/>
      <label className="label">Border radius (px)</label><input className="input" type="number" min="0" max="40" value={form.footer_radius||14} onChange={e=>set('footer_radius',e.target.value)}/>
      <label className="label">Font size (px)</label><input className="input" type="number" min="12" max="36" value={form.footer_font_size||19} onChange={e=>set('footer_font_size',e.target.value)}/>
    </div>
    <div><button className="btn" onClick={save} disabled={saving}>{saving?'Saving...':'Save Global Settings'}</button></div>
  </div>;
}
