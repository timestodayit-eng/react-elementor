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
    <div><button className="btn" onClick={save} disabled={saving}>{saving?'Saving...':'Save Global Settings'}</button></div>
  </div>;
}
