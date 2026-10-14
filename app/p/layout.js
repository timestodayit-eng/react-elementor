import { getDb } from '../../lib/db';import TrackingScripts,{TrackingNoScript} from '../../components/TrackingScripts';import GlobalCodeInjector from '../../components/GlobalCodeInjector';import GlobalFooter from '../../components/GlobalFooter';
export const dynamic='force-dynamic';
export default async function PublicLayout({children}){
  const settings={};
  try{const db=getDb();const [rows]=await db.query("SELECT setting_key,setting_value FROM settings WHERE setting_key IN ('gtm_id','meta_pixel_id','ga4_id','global_head_code','global_body_start_code','global_body_end_code','footer_enabled','footer_mode','footer_text','footer_url','footer_bg','footer_color','footer_height','footer_radius','footer_font_size')");for(const r of rows)settings[r.setting_key]=r.setting_value||''}catch(e){console.error('Public settings load failed',e.message)}
  const sticky=String(settings.footer_enabled||'0')==='1'&&(settings.footer_mode||'sticky')==='sticky';
  return <><TrackingScripts gtmId={settings.gtm_id} metaPixelId={settings.meta_pixel_id} ga4Id={settings.ga4_id}/><TrackingNoScript gtmId={settings.gtm_id}/><GlobalCodeInjector headCode={settings.global_head_code} bodyStartCode={settings.global_body_start_code} bodyEndCode={settings.global_body_end_code}/><div className={sticky?'lc-has-sticky-footer':''}>{children}</div><GlobalFooter settings={settings}/></>;
}
       
