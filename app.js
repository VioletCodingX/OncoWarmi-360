/* OncoWarmi 360 — Lógica de aplicación
   Hackathon Transformagob 2026 · INEN Lima
   Funcionalidades: Navegación, Traducciones ES/QU/AY,
   Motor de riesgo, Traductor médico, Modo Cuidador,
   Ruta Psicológica, Manejo del Dolor, Mapa INEN GPS.
*/

/* ═══════════════════════════════
   TRANSLATIONS
═══════════════════════════════ */
const TR = {
es:{
  status:'En línea', logo_sub:'Navegación Diagnóstica · INEN', user_region:'Ayacucho · Día 3',
  sec_principal:'PRINCIPAL', sec_rutas:'RUTAS DE ATENCIÓN', sec_tools:'HERRAMIENTAS', sec_inen:'INEN · PROFESIONALES',
  nav_inicio:'Inicio', nav_ruta:'Mi Ruta Diagnóstica', nav_sms:'WhatsApp OncoWarmi',
  nav_psico:'Ruta Psicológica', nav_dolor:'Manejo del Dolor', nav_check:'¿Viajar hoy?',
  nav_trad:'Traductor Médico', nav_call:'WarmiVoz', nav_cuid:'Modo Cuidador',
  nav_dash:'Panel · Semáforo IA', nav_brief:'Briefing al Médico',
  bn_ruta:'Mi Ruta', bn_sms:'Warmi', bn_psico:'Psico', bn_more:'Más',
  hero_tag:'DIAGNÓSTICO EN CURSO · DÍA 3', hero_name:'Hola, María 👋', hero_sub:'Tu próximo paso está confirmado',
  chip_mod:'📍 Módulo Admisión 3', chip_ref:'✓ Referencia aceptada',
  st1_lbl:'ETAPA', st1_sub:'Apertura HC pendiente',
  st2_lbl:'DÍAS EN PROCESO', st2_sub:'⬇ Promedio: 4.9 días',
  st3_lbl:'PRÓXIMA CITA', st3_sub:'Miércoles 18 jun',
  st4_lbl:'VIAJES EVITADOS', st4_sub:'Ahorro: S/ 240',
  al1_tit:'🌿 ¿Viajas desde Ayacucho?', al1_bod:'Tu resultado aún no está listo. No necesitas viajar hoy.', al1_btn:'Ver checklist →',
  al2_tit:'📋 Documentos para el 18 jun', al2_bod:'DNI · Hoja de referencia · Informe médico · Resultados previos',
  al3_tit:'🧠 ¿Sientes ansiedad?', al3_bod:'Contamos con apoyo psicológico especializado. Toca para acceder →',
  journey_tit:'Tu recorrido', journey_btn:'Ver ruta completa →',
  j1_tit:'Referencia REFCON', j1_des:'Aceptada desde Huamanga',
  j2_tit:'Registro en INEN', j2_des:'Perfil creado · Sistema SISINEN',
  j3_tit:'Apertura Historia Clínica', j4_tit:'Consulta especialista', j4_des:'Pendiente',
  ruta_h:'Mi Ruta Diagnóstica', ruta_p:'9 pasos · Tu proceso paso a paso',
  prog_tit:'Progreso general', prog_val:'2/9 completados',
  r1_t:'Referencia REFCON aprobada', r1_d:'Establecimiento de salud Huamanga',
  r2_t:'Registro en INEN', r2_d:'Sistema SISINEN · Código paciente',
  r3_t:'Apertura Historia Clínica', r3_d:'Módulo Admisión 3',
  r4_t:'Triaje oncológico', r4_d:'Evaluación inicial de riesgo',
  r5_t:'Exámenes de laboratorio', r5_d:'Análisis y resultados',
  r6_t:'Imágenes diagnósticas', r6_d:'Ecografía / Mamografía / PAP',
  r7_t:'Biopsia (si aplica)', r7_d:'Resultado anatomopatológico',
  r8_t:'Diagnóstico final', r8_d:'Junta médica oncológica',
  r9_t:'Plan de tratamiento', r9_d:'Inicio de tratamiento · Alta',
  sms_h:'💬 WhatsApp OncoWarmi', sms_p:'Tu asistente disponible 24/7',
  warmi_name:'Warmi Navegadora', warmi_stat:'● En línea',
  msg1:'🌸 Hola María, soy tu navegadora Warmi. Estoy aquí para acompañarte. ¡No estás sola! 💜',
  msg2:'✅ Tu referencia fue aceptada. Tu Historia Clínica se abre el 18 de junio a las 9:00 a.m. – Módulo Admisión 3.',
  msg3:'📋 Lleva: DNI · Hoja de referencia · Informe médico · Resultados previos',
  sms_ph:'Escribe tu consulta...', btn_send:'Enviar',
  q1:'¿Mi cita?', q2:'Documentos', q3:'¿Viajar hoy?', q4:'Apoyo emocional',
  psico_h:'🧠 Ruta Psicológica', psico_p:'Apoyo emocional · Psicooncología',
  psico_al_tit:'Esto es normal', psico_al_bod:'Sentir ansiedad o miedo es completamente normal. No estás sola.',
  pt1:'Evaluación', pt2:'Apoyo Warmi', pt3:'Técnicas', pt4:'Recursos',
  gad_tit:'¿Cómo te has sentido esta semana?', gad_sub:'Responde con honestidad — solo nosotras vemos esto',
  gad_q1:'1. Me he sentido nerviosa o con mucha preocupación',
  gad_q2:'2. No pude dejar de preocuparme',
  gad_q3:'3. Sentí mucho miedo, como si algo terrible fuera a pasar',
  gad_q4:'4. Me costó mucho relajarme',
  gad_o0:'Para nada', gad_o1:'Varios días', gad_o2:'Más de la mitad', gad_o3:'Casi siempre',
  gad_btn:'Ver mi resultado',
  wpsico_name:'Warmi Psicológica', wpsico_sub:'Apoyo emocional especializado',
  psico_msg1:'💜 Hola, soy Warmi. Estoy aquí para escucharte. Cuéntame cómo te sientes hoy.',
  psico_ph:'Cuéntame cómo te sientes...', pq1:'Tengo miedo', pq2:'No puedo dormir', pq3:'Me siento sola',
  breath_tit:'🌬️ Respiración 4-7-8', breath_sub:'Técnica probada para reducir la ansiedad en minutos',
  breath_start:'Presiona\nIniciar', breath_desc:'Ejercicio de respiración guiada', breath_btn:'🌬️ Iniciar respiración',
  calma_tit:'💭 Pensamiento de calma', calma_def:'Toca el botón para recibir un pensamiento reconfortante.', calma_btn:'💜 Recibir pensamiento de calma',
  rec_tit:'🏥 Servicios en el INEN',
  rec1_t:'Servicio de Psicología Oncológica', rec1_d:'Piso 3 · Lun–Vie 8am–4pm · Sin costo',
  rec2_t:'Grupo de apoyo para pacientes', rec2_d:'Miércoles 3pm · Sala Esperanza',
  rec3_t:'Línea de apoyo emocional', rec3_d:'113 opción 5 · 24 horas · Gratuito',
  dolor_h:'💊 Manejo del Dolor', dolor_p:'Registro · Escala EVA · Orientación',
  dolor_al_tit:'⚠️ Si el dolor es severo (8-10)', dolor_al_bod:'Acude al módulo de urgencias del INEN o llama al 113.',
  dt1:'Registrar dolor', dt2:'Mi diario', dt3:'Orientación IA',
  eva_tit:'Escala EVA — ¿Cuánto duele ahora?',
  eva_l0:'0\nSin dolor', eva_l5:'5\nModerado', eva_l10:'10\nInsoportable',
  eva_d0:'Sin dolor', dolor_donde:'¿Dónde sientes el dolor?',
  dp1:'Pecho', dp2:'Espalda', dp3:'Abdomen', dp4:'Cabeza', dp5:'Huesos', dp6:'Otro',
  dolor_nota_lbl:'Notas (opcional)', dolor_ph:'Ej: El dolor empezó esta mañana...', dolor_save_btn:'💾 Registrar en mi diario',
  pain_mod:'Dolor moderado', pain_lev:'Leve', pain_e1:'Pecho · Ayer 8:00 p.m.', pain_e2:'Espalda · Hace 2 días',
  pain_sum:'📊 Resumen de esta semana', pain_prom:'Promedio', pain_max:'Máximo',
  dor_ai_tit:'🤖 Orientación personalizada', dor_ai_sub:'Describe tu dolor y te daré recomendaciones (no reemplaza consulta médica)',
  dor_ai_ph:'Ej: Tengo dolor EVA 6 en el pecho desde hace 3 días...', dor_ai_btn:'🔍 Obtener orientación',
  trad_h:'🔤 Traductor Médico', trad_p:'Lenguaje médico → lenguaje claro para ti',
  trad_ph:'Ej: colposcopía, biopsia, REFCON...', trad_btn:'✨ Traducir con Warmi', trad_glos:'Términos frecuentes', glos_tap:'Toca para ver',
  call_h:'📞 WarmiVoz', call_p:'Orientación gratuita · Sin internet', call_ready:'Lista para atenderte', call_sub:'Selecciona tu idioma y toca Iniciar', call_btn:'📞 Iniciar consulta',
  chk_h:'✅ ¿Necesitas venir hoy?', chk_p:'Para pacientes de provincia — evita viajes innecesarios',
  chk_date:'ESTADO HOY · 13 JUN', chk_status:'🚫 No necesitas viajar hoy', chk_body:'Tu resultado aún está en revisión. Te avisaremos 48h antes de tu cita.',
  chk_q_tit:'Antes de viajar, responde:',
  chk_q1:'¿Tienes una cita programada para hoy?', chk_q2:'¿Warmi te confirmó que debes venir?',
  chk_q3:'¿Tu médico dijo que el resultado está listo?', chk_q4:'¿Debes retirar algún examen hoy?', chk_q5:'¿El INEN te llamó para que vengas?',
  chk_eval_btn:'✅ Evaluar si debo viajar', savings_tit:'💰 Viajes evitados este mes', sav_v:'Viajes evitados', sav_s:'Ahorro estimado',
  cuid_h:'👨‍👩‍👧 Modo Cuidador', cuid_p:'Conecta a tu familia en el proceso',
  cuid_al:'El cuidador autorizado recibirá las mismas alertas de Warmi.', cuid_reg:'Cuidador registrado',
  cuid_info:'Hija · +51 999 123 456 · Lima', cuid_active:'Activo', cuid_add_btn:'+ Agregar cuidador',
  dash_h:'📊 Panel · Semáforo IA', dash_p:'Vista institucional INEN · Motor Claude API',
  th1:'Paciente', th2:'Días', th3:'Etapa', th4:'Riesgo', th5:'Acción', dash_btn:'Analizar',
  brief_h:'📋 Briefing al Médico', brief_p:'Resumen del recorrido · Generado por IA', brief_cfg:'Configurar briefing',
  brief_t1:'Briefing completo', brief_t2:'Resumen ejecutivo', brief_t3:'Alertas críticas', brief_btn:'📋 Generar Briefing con IA',
  glos_all:'Todos', glos_exam:'Exámenes', glos_proc:'Procedimientos', glos_sist:'Sistema',
  city_ayacucho:'Ayacucho', city_huanca:'Huancavelica', city_lima:'Lima',
  banner:'🇵🇪 Idioma: Español activado',
  // page meta
  pm_inicio:'Inicio', pm_inicio_s:'Bienvenida a tu navegadora OncoWarmi',
  pm_ruta:'Mi Ruta Diagnóstica', pm_ruta_s:'Tu proceso paso a paso · 9 etapas',
  pm_sms:'WhatsApp OncoWarmi', pm_sms_s:'Chat 24/7 con tu navegadora',
  pm_psico:'Ruta Psicológica', pm_psico_s:'Apoyo emocional · Psicooncología',
  pm_dolor:'Manejo del Dolor', pm_dolor_s:'Escala EVA · Registro · Orientación',
  pm_trad:'Traductor Médico', pm_trad_s:'Lenguaje médico en palabras claras',
  pm_call:'WarmiVoz', pm_call_s:'Orientación gratuita sin internet',
  pm_check:'¿Necesitas venir hoy?', pm_check_s:'Evita viajes innecesarios desde provincia',
  pm_cuid:'Modo Cuidador', pm_cuid_s:'Alertas compartidas con tu familia',
  pm_dash:'Panel · Semáforo IA', pm_dash_s:'Motor de priorización con Claude API',
  pm_brief:'Briefing al Médico', pm_brief_s:'Resumen del recorrido generado con IA',
},
qu:{
  status:'Kaypi kachkani', logo_sub:'Usuta Taripay Ñan · INEN', user_region:'Ayacucho · 3 P\'unchaw',
  sec_principal:'QALLARIY', sec_rutas:'ATENCION ÑANKUNAN', sec_tools:'LLAMK\'ANA', sec_inen:'INEN · HAMPIKIQKUNA',
  nav_inicio:'Qallariy', nav_ruta:'Ñuqaq Taripay Ñan', nav_sms:'WhatsApp Warmi',
  nav_psico:'Yuyay Ñan', nav_dolor:'Nanayta Qhaway', nav_check:'Kunanmi Hamunaykin?',
  nav_trad:'Simikunata Rijchay', nav_call:'WarmiVoz Rimay', nav_cuid:'Qhawaq Suyu',
  nav_dash:'INEN Panel · Qaylluqmi', nav_brief:'Hampiq Qillqay',
  bn_ruta:'Ñan', bn_sms:'Warmi', bn_psico:'Yuyay', bn_more:'Astawan',
  hero_tag:'USUTA TARIPAY · 3 P\'UNCHAW', hero_name:'Rimaykullayki, María 👋', hero_sub:'Hamunanaykim allin rurasqa',
  chip_mod:'📍 Admisión 3 Modulo', chip_ref:'✓ Referencia Chaskisqa',
  st1_lbl:'KUNAPI KAY', st1_sub:'HC kichay suyay',
  st2_lbl:'P\'UNCHAW TARIPAYPI', st2_sub:'⬇ Chawpin: 4.9 p\'unchaw',
  st3_lbl:'HAMUQ CITA', st3_sub:'Miércoles Junio 18',
  st4_lbl:'MANA PURISQA', st4_sub:'Qullqi waqaychay: S/ 240',
  al1_tit:'🌿 Ayacuchomantachu hamunki?', al1_bod:'Yuyayniykim manaraqmi tukuy. Mana kunan puriyta munankichu.', al1_btn:'Checklist qhaway →',
  al2_tit:'📋 Qillqakuna Junio 18 paq', al2_bod:'DNI · Referencia qillqa · Hampiq willakuy · Ñawpa tarisqakuna',
  al3_tit:'🧠 Manchachikuykichu?', al3_bod:'Yuyay yanapaykim tiyan. Hamuy →',
  journey_tit:'Ñuqaq suyay ñan', journey_btn:'Tukuy ñanta qhaway →',
  j1_tit:'Referencia REFCON', j1_des:'Huamangamanta chaskisqa',
  j2_tit:'INEN-pi Qillqasqa', j2_des:'Riqsikuy rurasqa · SISINEN',
  j3_tit:'Historia Clínica Kichay', j4_tit:'Hampikiqwan Tupay', j4_des:'Suyachkani',
  ruta_h:'Ñuqaq Taripay Ñan', ruta_p:'9 paso · Pacha pachamanta ñanniyki',
  prog_tit:'Tukuy yuyay', prog_val:'2/9 tukusqa',
  r1_t:'Referencia REFCON chaskisqa', r1_d:'Huamanga hampiy wasipi',
  r2_t:'INEN-pi qillqasqa', r2_d:'SISINEN · Paciente código',
  r3_t:'Historia Clínica kichay', r3_d:'Admisión 3 Modulo',
  r4_t:'Onkuy taripay', r4_d:'Qallariy riesgota qhaway',
  r5_t:'Laboratorio tapusqakuna', r5_d:'Tarisqakuna',
  r6_t:'Imagen qhawana', r6_d:'Ecografía / Mamografía / PAP',
  r7_t:'Biopsia (sichus tiyan)', r7_d:'Anatomía patológica',
  r8_t:'Tukuy taripay', r8_d:'Hampikiq junta',
  r9_t:'Hampiy plan', r9_d:'Hampiy qallariy · Alta',
  sms_h:'WhatsApp Warmi', sms_p:'24/7 qhawaq',
  warmi_name:'Warmi Navegadora', warmi_stat:'● Kaypi kachkani',
  msg1:'🌸 Rimaykullayki María, ñuqam Warmi. Kaypi kachkani, mana sapallaykichu! 💜',
  msg2:'✅ Referenciaykim chaskisqa. HC kichay: Junio 18, 9:00 a.m. – Admisión 3 Módulo.',
  msg3:'📋 Apay: DNI · Referencia qillqa · Hampiq willakuy · Ñawpa tarisqakuna',
  sms_ph:'Tapuyniykit qillqay...', btn_send:'Kachamuy',
  q1:'¿Citaykim?', q2:'Qillqakuna', q3:'¿Purinachu kunan?', q4:'Yuyay yanapay',
  psico_h:'🧠 Yuyay Ñan', psico_p:'Yuyay yanapay · Psicooncología',
  psico_al_tit:'Kay normal', psico_al_bod:'Manchachikuy, llakiy — kay tukuy normal. Mana sapallayki.',
  pt1:'Taripay', pt2:'Warmi Yanapay', pt3:'Simikunan', pt4:'Yanapakuna',
  gad_tit:'¿Kay simanapin imaynatan kashanki?', gad_sub:'Cheqaq kutichi — ñuqaykullam rikunchis',
  gad_q1:'1. Nerviosam kasharani, manchachikuspa',
  gad_q2:'2. Mana llakiyta saqiyta atiranichu',
  gad_q3:'3. Mancharisqam kasharani, ima mana allin kasqanmanta',
  gad_q4:'4. Mana samariyta atiranichu',
  gad_o0:'Para nada', gad_o1:'Sapa p\'unchaw', gad_o2:'Astawanraq', gad_o3:'Siempre hina',
  gad_btn:'Taripayniykit qhaway',
  wpsico_name:'Warmi Psicologa', wpsico_sub:'Yuyay yanapay',
  psico_msg1:'💜 Rimaykullayki, ñuqam Warmi. Willaway imaynatan kashanki.',
  psico_ph:'Willaway imaynatan kashanki...', pq1:'Manchachikusqa kachkani', pq2:'Mana puñuyta atinichu', pq3:'Sapalla kachkani',
  breath_tit:'🌬️ Samay 4-7-8', breath_sub:'Manchachikuyta pisichina técnica',
  breath_start:'Qallariy\nApa', breath_desc:'Qhawarisqa samay', breath_btn:'🌬️ Samay qallariy',
  calma_tit:'💭 Samay yuyay', calma_def:'Toca para recibir palabras de calma.', calma_btn:'💜 Samay yuyayta chaskiy',
  rec_tit:'🏥 INEN-pi yanapakuna',
  rec1_t:'Psicolojía Oncológica servicio', rec1_d:'3 piso · Lun–Vie 8am–4pm · Mana pagakuy',
  rec2_t:'Pacientekunaq yanapay grupo', rec2_d:'Miércoles 3pm · Sala Esperanza',
  rec3_t:'Yuyay yanapay línea', rec3_d:'113 opción 5 · 24 hora · Mana pagakuy',
  dolor_h:'💊 Nanayta Qhaway', dolor_p:'Qillqay · EVA Qhawana · Yanapay',
  dolor_al_tit:'⚠️ Nanay hatun kaqtin (8-10)', dolor_al_bod:'Kallpaqta INEN urgencias-man ri o 113-ta waqay.',
  dt1:'Nanayta qillqay', dt2:'Ñuqaq registroy', dt3:'IA Yanapay',
  eva_tit:'EVA Qhawana — ¿Imayna nanayki kunan?',
  eva_l0:'0\nMana nanay', eva_l5:'5\nChawpi', eva_l10:'10\nAtipayqa',
  eva_d0:'Mana nanay', dolor_donde:'¿Maypim nanaykim?',
  dp1:'Sonqoy', dp2:'Wasiy', dp3:'Wijsay', dp4:'Umay', dp5:'Tulluy', dp6:'Huk',
  dolor_nota_lbl:'Willakuy (munaykiqtinqa)', dolor_ph:'Ej: Nanay qallarirqa kay paqariy...', dolor_save_btn:'💾 Registroman qillqay',
  pain_mod:'Chawpi nanay', pain_lev:'Pisilla', pain_e1:'Sonqoy · Qayna 8:00 p.m.', pain_e2:'Wasiy · 2 p\'unchaw ñawpaq',
  pain_sum:'📊 Kay simanapi killkakuna', pain_prom:'Chawpin', pain_max:'Hatunpaq',
  dor_ai_tit:'🤖 Yanapay', dor_ai_sub:'Nanaykita willaway',
  dor_ai_ph:'Ej: EVA 6 nanay sonqoypi 3 p\'unchawña...', dor_ai_btn:'🔍 Yanapay maskay',
  trad_h:'🔤 Simikunata Rijchay', trad_p:'Hampiq simi → llamp\'u simi',
  trad_ph:'Ej: colposcopía, biopsia, REFCON...', trad_btn:'✨ Warmi-wan rijchay', trad_glos:'Sapa sapa simikunan', glos_tap:'Tokayna qhaway',
  call_h:'📞 WarmiVoz Rimay', call_p:'Mana pagakuy · Mana internetti munakuqtinchu', call_ready:'Atencionaykipaq', call_sub:'Simiykita akllay chaymanta Qallariy toca', call_btn:'📞 Rimay qallariy',
  chk_h:'✅ Kunanmi Hamunaykin?', chk_p:'Karuy llaqtamanta runakuna paq',
  chk_date:'KUNAP ESTADO · 13 JUN', chk_status:'🚫 Mana kunan puriyta munankichu', chk_body:'Yuyayniykim hampiq qhawachkanmi. 48 hora ñawpaqta willasunki.',
  chk_q_tit:'Purinaykipaq ñawpaqta kutichi:',
  chk_q1:'¿Kunan citaykim tiyanchu?', chk_q2:'¿Warmi willasunkichu hamunaykipaq?',
  chk_q3:'¿Hampikiq willasunkichu yuyayniykim listam?', chk_q4:'¿Tarisqayta apanaykim?', chk_q5:'¿INEN waqyasunkikuchu?',
  chk_eval_btn:'✅ Purinaymanta yachay', savings_tit:'💰 Kay killapi mana purisqa', sav_v:'Mana purisqa', sav_s:'Qullqi waqaychay',
  cuid_h:'Qhawaq Suyu', cuid_p:'Aylluykiwan huñikuy',
  cuid_al:'Chaskisqa qhawaq Warmi-manta willakuyta chaskinka.', cuid_reg:'Qhawaq qillqasqa',
  cuid_info:'Ususiy · +51 999 123 456 · Lima', cuid_active:'Llamk\'achkam', cuid_add_btn:'+ Huk qhawaqta yapay',
  dash_h:'📊 INEN Panel · Qaylluqmi', dash_p:'INEN qhawana · Claude API',
  th1:'Paciente', th2:'P\'unchaw', th3:'Etapa', th4:'Riesgo', th5:'Ruway', dash_btn:'Taripay',
  brief_h:'📋 Hampiq Qillqay', brief_p:'Paciente recorrido · IA ruwasqa', brief_cfg:'Qillqayta allichay',
  brief_t1:'Tukuy qillqay', brief_t2:'Pisi willakuy', brief_t3:'Alerta hatunkuna', brief_btn:'📋 IA-wan qillqay',
  glos_all:'Tukuykuna', glos_exam:'Tapusqakuna', glos_proc:'Ruwaykuna', glos_sist:'Sistema',
  city_ayacucho:'Ayakuchu', city_huanca:'Wankawillka', city_lima:'Rimaq',
  banner:'🌿 Simipi kachkani: Quechua',
  pm_inicio:'Qallariy', pm_inicio_s:'Warmi Navegadoranikiwan',
  pm_ruta:'Ñuqaq Taripay Ñan', pm_ruta_s:'Pacha pachamanta ñanniyki',
  pm_sms:'WhatsApp Warmi', pm_sms_s:'24/7 yanapaykipaq',
  pm_psico:'Yuyay Ñan', pm_psico_s:'Yuyay yanapay · Psicooncología',
  pm_dolor:'Nanayta Qhaway', pm_dolor_s:'EVA Qhawana · Registroy · Yanapay',
  pm_trad:'Simikunata Rijchay', pm_trad_s:'Hampiq simi → llamp\'u simi',
  pm_call:'WarmiVoz Rimay', pm_call_s:'Mana pagakuy waqyay',
  pm_check:'Kunanmi Hamunaykin?', pm_check_s:'Mana necesario puriyta jark\'ay',
  pm_cuid:'Qhawaq Suyu', pm_cuid_s:'Ayllu willakuykuna',
  pm_dash:'INEN Panel · Qaylluqmi', pm_dash_s:'Claude API motor',
  pm_brief:'Hampiq Qillqay', pm_brief_s:'IA ruwasqa paciente recorrido',
},
ay:{
  status:'Aka utjasktha', logo_sub:'Onkuri Thakhi · INEN', user_region:'Ayacucho · 3 Uru',
  sec_principal:'QALLTAÑA', sec_rutas:'THAKHINAKA', sec_tools:'LURAÑANAKA', sec_inen:'INEN · MÉDIKUANAKA',
  nav_inicio:'Qalltaña', nav_ruta:'Nayan Onkuri Thakhi', nav_sms:'WhatsApp Warmi',
  nav_psico:'Amuyu Thakhi', nav_dolor:'Ch\'amaka Qhawana', nav_check:'Jichha Jutañasa?',
  nav_trad:'Arupa Amtaña', nav_call:'WarmiVoz Arsuña', nav_cuid:'Qhawiri Suyu',
  nav_dash:'INEN Panel · Kimsa Color', nav_brief:'Médico Qillqt\'aña',
  bn_ruta:'Thakhi', bn_sms:'Warmi', bn_psico:'Amuyu', bn_more:'Askat',
  hero_tag:'ONKURI TAYPINTAÑ · 3 URU', hero_name:'Kamisaki, María 👋', hero_sub:'Nayanaja thakhi sarnaqaña alintaw',
  chip_mod:'📍 Admisión 3 Yatiqaña', chip_ref:'✓ Referencia Apantataw',
  st1_lbl:'JICHHA SUYU', st1_sub:'HC kichataña suyaña',
  st2_lbl:'URU TAYPINTAÑ', st2_sub:'⬇ Taypi: 4.9 uru',
  st3_lbl:'JUTIR CITA', st3_sub:'Miércoles Junio 18',
  st4_lbl:'MANA SARTATA', st4_sub:'Jisk\'a: S/ 240',
  al1_tit:'🏔️ Ayacuchankitatwa jutxarasmawa?', al1_bod:'Yatiyañamawa janiwa tukurikiti. Jichha mana sartañasa.', al1_btn:'Checklist qhawani →',
  al2_tit:'📋 Qillqanaka Junio 18 Pax', al2_bod:'DNI · Referencia qillqa · Médico yatiyaña · Nayra lurawinaka',
  al3_tit:'🧠 Llakisiñasa?', al3_bod:'Llakisiri yanapaña utji. Jutxama →',
  journey_tit:'Nayanaja thakhi', journey_btn:'Tukuy thakhi qhawani →',
  j1_tit:'Referencia REFCON', j1_des:'Huamangankitatwa apantataw',
  j2_tit:'INEN-kama qillqataña', j2_des:'Riqsiña lurataw · SISINEN',
  j3_tit:'Historia Clínica kichataña', j4_tit:'Médico tuqataña', j4_des:'Suyasktwa',
  ruta_h:'Nayan Onkuri Thakhi', ruta_p:'9 paso · Pachampi thakhinaja',
  prog_tit:'Tukuy yatiyaña', prog_val:'2/9 tukutataw',
  r1_t:'Referencia REFCON apantataw', r1_d:'Huamanga kamachi utana',
  r2_t:'INEN-kama qillqataña', r2_d:'SISINEN · Paciente código',
  r3_t:'Historia Clínica kichataña', r3_d:'Admisión 3 Yatiqaña',
  r4_t:'Onkiri taripataña', r4_d:'Qalltaña riesgota qhawana',
  r5_t:'Laboratorio tapuwinaka', r5_d:'Lurawinaka',
  r6_t:'Achikiña qhawana', r6_d:'Ecografía / Mamografía / PAP',
  r7_t:'Biopsia (utjañataki)', r7_d:'Anatomía patológica',
  r8_t:'Tukuy taripataña', r8_d:'Médiku junta',
  r9_t:'Kamachaña plan', r9_d:'Kamachaña qalltaña · Alta',
  sms_h:'WhatsApp Warmi', sms_p:'24/7 qhawiri',
  warmi_name:'Warmi Navegadora', warmi_stat:'● Aka utjasktha',
  msg1:'🌸 Kamisaki María, nayaw Warmi. Akankiwa, janiw saparukis utjkataiti! 💜',
  msg2:'✅ Referenciamawa apantataw. HC kichataña: Junio 18, 9:00 a.m. – Admisión 3.',
  msg3:'📋 Apani: DNI · Referencia qillqa · Médico yatiyaña · Nayra lurawinaka',
  sms_ph:'Tapuñamawa qillqt\'i...', btn_send:'Apawi',
  q1:'¿Citamawa?', q2:'Qillqanaka', q3:'¿Jichha sartañasa?', q4:'Amuyu yanapana',
  psico_h:'🧠 Amuyu Thakhi', psico_p:'Amuyu yanapana · Psicooncología',
  psico_al_tit:'Ukax walikiwa', psico_al_bod:'Llakisiri, manchxataña — ukax tukux walikiwa. Janiw saparukis.',
  pt1:'Taripataña', pt2:'Warmi Yanapana', pt3:'Simikunan', pt4:'Yanapawinaka',
  gad_tit:'¿Jichha simanak kunjamaktanki?', gad_sub:'Cheqax kutichi — nayakamax uñjañani',
  gad_q1:'1. Nerviosax utjataynwa, manchxatanwa',
  gad_q2:'2. Janiw llakiña saqiñax atitaynti',
  gad_q3:'3. Manchxataw utjaynwa, ima waliki janiw utjkana',
  gad_q4:'4. Janiw samarañax atitaynti',
  gad_o0:'Janiwa', gad_o1:'Wakisiri uru', gad_o2:'Aski chuymani', gad_o3:'Siempre hina',
  gad_btn:'Taripawimja uñjani',
  wpsico_name:'Warmi Psikologa', wpsico_sub:'Amuyu yanapana',
  psico_msg1:'💜 Kamisaki, nayaw Warmi. Yatiyañamawa akankiwa.',
  psico_ph:'Yatiyañamawa...', pq1:'Manchxataskwa', pq2:'Janiw puñuñax atktanti', pq3:'Saparux utjasktha',
  breath_tit:'🌬️ Samawi 4-7-8', breath_sub:'Llakisiri pisichañataki técnica',
  breath_start:'Qalltaña\nApa', breath_desc:'Qhawarisqa samawi', breath_btn:'🌬️ Samawi qalltaña',
  calma_tit:'💭 Samawi amuyu', calma_def:'Toca para recibir palabras de calma.', calma_btn:'💜 Samawi yatiyaña',
  rec_tit:'🏥 INEN-kama yanapawinaka',
  rec1_t:'Psikolojía Oncológica servicio', rec1_d:'3 piso · Lun-Vie 8am-4pm · Mana pagataña',
  rec2_t:'Pacientenakatak yanapana grupo', rec2_d:'Miércoles 3pm · Sala Esperanza',
  rec3_t:'Amuyu yanapana línea', rec3_d:'113 opción 5 · 24 uru · Mana pagataña',
  dolor_h:'💊 Ch\'amaka Qhawana', dolor_p:'Qillqataña · EVA Qhawana · Yanapana',
  dolor_al_tit:'⚠️ Ch\'amaka jach\'a kaqtan (8-10)', dolor_al_bod:'INEN urgencias-kama ji o 113 jan wawqestani.',
  dt1:'Ch\'amaka qillqataña', dt2:'Nayanaja registro', dt3:'IA Yanapana',
  eva_tit:'EVA Qhawana — ¿Kunjama ch\'amaktanki jichha?',
  eva_l0:'0\nJani ch\'amaki', eva_l5:'5\nTaypi', eva_l10:'10\nAtipayqa',
  eva_d0:'Jani ch\'amaki', dolor_donde:'¿Kawkirusa ch\'amaktanki?',
  dp1:'Chuyma', dp2:'Qucha', dp3:'Wijsa', dp4:'Uma', dp5:'Tullu', dp6:'Huk',
  dolor_nota_lbl:'Yatiyaña (munañataki)', dolor_ph:'Ej: Ch\'amaka qalltaw jichha...', dolor_save_btn:'💾 Registro-kama qillqataña',
  pain_mod:'Taypi ch\'amaka', pain_lev:'Jisk\'a', pain_e1:'Chuyma · Yester 8:00 p.m.', pain_e2:'Qucha · 2 uru nayra',
  pain_sum:'📊 Jichha simanak katu', pain_prom:'Taypi', pain_max:'Jach\'a',
  dor_ai_tit:'🤖 Yanapana', dor_ai_sub:'Ch\'amakamawa yatiyañamawa',
  dor_ai_ph:'Ej: EVA 6 ch\'amaka chuymanxa 3 uruna...', dor_ai_btn:'🔍 Yanapana maskataña',
  trad_h:'🔤 Arupa Amtaña', trad_p:'Médiko arupa → jaqi arupa',
  trad_ph:'Ej: colposcopía, biopsia, REFCON...', trad_btn:'✨ Warmi-mpi amtaña', trad_glos:'Arunanaka', glos_tap:'Tokaña uñjani',
  call_h:'📞 WarmiVoz Arsuña', call_p:'Mana pagataña · Jani interneti munañataki', call_ready:'Atiñatakiwa', call_sub:'Arunakaxa akllaña chikampiwa qalltaña', call_btn:'📞 Arsuña qalltaña',
  chk_h:'✅ Jichha INEN-kama Jutañasa?', chk_p:'Jaya markankiri jaqi pax',
  chk_date:'JICHHA ESTADO · 13 JUN', chk_status:'🚫 Jichha mana jutañasa', chk_body:'Yatiyañamawa médicow qhawaskiw. 48 uru nayraqata yatiyapxäta.',
  chk_q_tit:'Sartaña nayraqata kutichi:',
  chk_q1:'¿Jichha citamawa utjki?', chk_q2:'¿Warmi yatiyatawa jutañataki?',
  chk_q3:'¿Médico yatiyatawa yatiyañamawa lista?', chk_q4:'¿Jichha uru lurawinaka apañasa?', chk_q5:'¿INEN wawqestawa?',
  chk_eval_btn:'✅ Sartañasa yatintaña', savings_tit:'💰 Jichha phaxsi mana sartata', sav_v:'Mana sartata', sav_s:'Jisk\'a',
  cuid_h:'Qhawiri Suyu', cuid_p:'Aka jaqinakaxa taypintañ',
  cuid_al:'Apata qhawiripa Warmi-txa yatiyañanaka chiqanchatapxäta.', cuid_reg:'Qhawiri qillqataña',
  cuid_info:'Ichijamawa · +51 999 123 456 · Lima', cuid_active:'Luraskiw', cuid_add_btn:'+ Huk qhawiri yapxataña',
  dash_h:'📊 INEN Panel · Kimsa Color', dash_p:'INEN qhawana · Claude API',
  th1:'Paciente', th2:'Uru', th3:'Etapa', th4:'Riesgo', th5:'Lurana', dash_btn:'Taripataña',
  brief_h:'📋 Médico Qillqt\'aña', brief_p:'Paciente thakhi · IA luratayna', brief_cfg:'Qillqt\'aña alichaña',
  brief_t1:'Tukuy qillqt\'aña', brief_t2:'Pisi yatiyaña', brief_t3:'Alerta jach\'anaka', brief_btn:'📋 IA-mpi qillqt\'aña',
  glos_all:'Tukuynaka', glos_exam:'Tapuwinaka', glos_proc:'Lurañanaka', glos_sist:'Sistema',
  city_ayacucho:'Ayakuchu', city_huanca:'Wankawillka', city_lima:'Rimaq',
  banner:'🏔️ Arunakaxa: Aymara chiqañchatawa',
  pm_inicio:'Qalltaña', pm_inicio_s:'Warmi Navegadorampiwa',
  pm_ruta:'Nayan Onkuri Thakhi', pm_ruta_s:'Pachampi thakhinaja',
  pm_sms:'WhatsApp Warmi', pm_sms_s:'24/7 yanapaña',
  pm_psico:'Amuyu Thakhi', pm_psico_s:'Amuyu yanapana · Psicooncología',
  pm_dolor:'Ch\'amaka Qhawana', pm_dolor_s:'EVA Qhawana · Registro · Yanapana',
  pm_trad:'Arupa Amtaña', pm_trad_s:'Médiko arupa → jaqi arupa',
  pm_call:'WarmiVoz Arsuña', pm_call_s:'Mana pagataña arsusiña',
  pm_check:'Jichha Jutañasa?', pm_check_s:'Mana jutañasa jark\'aña',
  pm_cuid:'Qhawiri Suyu', pm_cuid_s:'Ayllu yatiyañanaka',
  pm_dash:'INEN Panel · Kimsa Color', pm_dash_s:'Claude API motor',
  pm_brief:'Médico Qillqt\'aña', pm_brief_s:'IA luratayna paciente thakhi',
}};

const pageMeta={
  inicio:['pm_inicio','pm_inicio_s'],ruta:['pm_ruta','pm_ruta_s'],sms:['pm_sms','pm_sms_s'],
  psicologia:['pm_psico','pm_psico_s'],dolor:['pm_dolor','pm_dolor_s'],traductor:['pm_trad','pm_trad_s'],
  llamada:['pm_call','pm_call_s'],checklist:['pm_check','pm_check_s'],cuidador:['pm_cuid','pm_cuid_s'],
  dashboard:['pm_dash','pm_dash_s'],briefing:['pm_brief','pm_brief_s']
};

let currentLang='es';

function setLang(lang){
  currentLang=lang;
  const t=TR[lang];
  // toggle buttons
  ['es','qu','ay'].forEach(l=>document.getElementById('lb-'+l)?.classList.toggle('active',l===lang));
  // translate all [data-t]
  document.querySelectorAll('[data-t]').forEach(el=>{
    const k=el.dataset.t;
    if(t[k]!==undefined) el.textContent=t[k];
  });
  // translate placeholders
  document.querySelectorAll('[data-t-ph]').forEach(el=>{
    const k=el.dataset.tPh;
    if(t[k]) el.placeholder=t[k];
  });
  // update topbar for current page
  const activePage=document.querySelector('.page.active');
  if(activePage){
    const pid=activePage.id.replace('page-','');
    const m=pageMeta[pid];
    if(m){ document.getElementById('tb-title').textContent=t[m[0]]||''; document.getElementById('tb-sub').textContent=t[m[1]]||''; }
  }
  // banner
  const b=document.getElementById('lang-banner');
  b.textContent=t.banner; b.style.display='block';
  clearTimeout(b._t); b._t=setTimeout(()=>b.style.display='none',3000);
}

/* NAVIGATION */
function show(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('.bnav-item').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById('page-'+page); if(el) el.classList.add('active');
  const ni=document.getElementById('ni-'+page);   if(ni) ni.classList.add('active');
  const bn=document.getElementById('bn-'+page);   if(bn) bn.classList.add('active');
  const t=TR[currentLang]; const m=pageMeta[page];
  if(m){ document.getElementById('tb-title').textContent=t[m[0]]||page; document.getElementById('tb-sub').textContent=t[m[1]]||''; }
  closeAll(); window.scrollTo(0,0);
}

function toggleDrawer(){
  const s=document.getElementById('sidebar');
  const o=document.getElementById('overlay');
  const open=s.classList.toggle('open');
  if(open){o.style.display='block';setTimeout(()=>o.classList.add('open'),10);}
  else closeAll();
}
function closeAll(){
  const s=document.getElementById('sidebar'); s.classList.remove('open');
  const o=document.getElementById('overlay'); o.classList.remove('open');
  document.getElementById('more-sheet').classList.remove('open');
  setTimeout(()=>o.style.display='none',300);
}
function openMore(){
  document.getElementById('more-sheet').classList.add('open');
  const o=document.getElementById('overlay'); o.style.display='block';
  setTimeout(()=>o.classList.add('open'),10);
}

/* CLAUDE API */
async function callClaude(prompt,sys='Eres Warmi, navegadora oncológica del INEN Lima. Responde en español con empatía y brevedad.'){
  const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({model:'claude-sonnet-4-6',max_tokens:1000,system:sys,messages:[{role:'user',content:prompt}]})});
  const d=await r.json(); return d.content?.[0]?.text||'Sin respuesta.';
}

async function sendChat(){
  const inp=document.getElementById('chat-input'); const txt=inp.value.trim(); if(!txt)return;
  addMsg('chat-msgs','user',txt); inp.value='';
  const t=addMsg('chat-msgs','warmi','⏳...');
  try{ t.textContent=await callClaude(`Paciente María Quispe, 52 años, Ayacucho, etapa 3/9. Consulta: "${txt}"`,
    'Eres Warmi, navegadora oncológica. Responde con empatía, en español simple. Máximo 3 oraciones.');}
  catch(e){t.textContent='Error. Intenta de nuevo.';}
}
function quickMsg(t){document.getElementById('chat-input').value=t;sendChat();show('sms');}

async function sendPsico(){
  const inp=document.getElementById('psico-input'); const txt=inp.value.trim(); if(!txt)return;
  addMsg('psico-msgs','user',txt); inp.value='';
  const t=addMsg('psico-msgs','warmi','💜...');
  try{ t.textContent=await callClaude(`Paciente oncológica dice: "${txt}"`,
    'Eres psicóloga oncológica Warmi. Valida sentimientos y ofrece consuelo. Máximo 4 oraciones.');}
  catch(e){t.textContent='Error.';}
}
function quickPsico(t){document.getElementById('psico-input').value=t;sendPsico();psicoTab('apoyo');}

function addMsg(cid,type,text){
  const c=document.getElementById(cid); const d=document.createElement('div');
  d.className='msg msg-'+type; d.textContent=text; c.appendChild(d); c.scrollTop=c.scrollHeight; return d;
}

// ── MEDICAL DICTIONARY (local, no API needed) ──
const MED_DICT = {
  'colposcopia': {
    es: '🔬 Colposcopía\n\nEs un examen donde el médico usa una lupa especial (colposcopio) para ver el cuello del útero con mucho detalle. No duele, solo sientes algo parecido a un examen ginecológico normal. Dura unos 15 minutos. Sirve para detectar células anormales antes de que se conviertan en cáncer.',
    qu: '🔬 Colposcopía\n\nHampikiq wawtuwan (colposcopio) qarirurinta hatun qhawachispa rikunan. Mana nanachu, paciente pampachakunapi tiyayuspa. 15 minutollam. Onkuyman puriyta mana saqinapaq ruwan.',
    ay: '🔬 Colposcopía\n\nMédiku utajjama colposcopio sasaw apaña-qhawañataki rikunani. Janiw ch_amakiti, warmix sarnaqawipan tiyi. 15 minutola. Onkiri mana utjañataki luraña.'
  },
  'biopsia': {
    es: '🔬 Biopsia\n\nEs cuando el médico saca un pedacito muy pequeño de tejido de tu cuerpo para analizarlo en un laboratorio. Así pueden saber con certeza si hay células malas (cancerosas) o no. Puede sentirse un pequeño pellizco. El resultado demora unos 7-14 días.',
    qu: '🔬 Biopsia\n\nHampikiq aypa pisillata quruynikipi churan laboratorio-man apanapaq. Chaywanmi richanku onkuychus tiyanchu. Pisillam nanan. 7-14 p\'unchawmi tarispam chayan.',
    ay: '🔬 Biopsia\n\nMédiku jisakiw jisk\'a aychax qhiptayaña laboratorio-kama apañataki. Ukhamawa yatintani onkiri utjicha janicha. Jisk\'aw ch\'amakiti. 7-14 uruxa lluqsiña.'
  },
  'estadio clinico': {
    es: '📊 Estadio clínico\n\nEs la etapa o fase en que se encuentra el cáncer. Se nombra del I al IV (1 al 4). Estadio I significa que el cáncer es pequeño y está solo en un lugar. Estadio IV significa que se ha extendido a otras partes del cuerpo. Cuanto antes se detecta, mejor el tratamiento.',
    qu: '📊 Estadio Clínico\n\nOnkuy maypin kachkanqa ima sayaypim kan: I nisqamanta IV nisqakama (1-4). I kaqqa: onkuy pisi, huk lugarllapi. IV kaqqa: onkuy tukuy aypaykun. Ñawpaqta tarikukusqan, astawanraq allin hampikuna kan.',
    ay: '📊 Estadio Clínico\n\nOnkiri qawqha suyu utji: I-txa IV-kama (1-4). I kaqtxa: onkiri jisk\'aw, huk lugarllaki. IV kaqtxa: tukuy qhiphan. Nayraqata taripataxa, aski hampina utji.'
  },
  'refcon': {
    es: '📋 REFCON\n\nEs el sistema del Ministerio de Salud del Perú que conecta tu médico del pueblo con el INEN de Lima. Cuando tu médico local ve que necesitas atención especializada, te envía una referencia por REFCON al INEN. Sin esa referencia no puedes atenderte en el INEN.',
    qu: '📋 REFCON\n\nMinsa-pa sistemanmi, llaqtaykipi hampikiq INEN-man kachanakuqmi. Hampikiyki rikukun INEN-pi atencionaykita munankis nispa, REFCON-pi kachamuyki. Chay kachay mana kaytinqa INEN-pi mana atiendesuykichu.',
    ay: '📋 REFCON\n\nMinsa-n sistema, markankiru médiku INEN-kama apañataki. Médikuykixa uñjani INEN-kama jutañasa nispa, REFCON-pi yatiyana. Jani ukanxa INEN-kama janiw atientetatakiti.'
  },
  'pap': {
    es: '🔬 PAP / Papanicolau\n\nEs un examen muy sencillo para detectar células anormales en el cuello del útero (cérvix). El médico o enfermera toma una pequeña muestra con un hisopo. Casi no duele. Demora solo 5 minutos. Se recomienda hacerlo cada 3 años a partir de los 25 años.',
    qu: '🔬 PAP / Papanicolau\n\nQarirurikipi mana allin celulasta rikunapaq taripay. Hampikiq hisopo nisqawan pisillata churan. Mana nanachu. 5 minutolla. 25 watayoqmanta qallarispa, 3 watapiqa ruwakunan.',
    ay: '🔬 PAP / Papanicolau\n\nQarinxa mana waliki célula uñjañataki. Médiku hisopo-mpiwa jisk\'a muestra aykhuni. Janiw ch_amakiti. 5 minutola. 25 marani qallantaña, 3 mara chuymapata luraña.'
  },
  'mamografia': {
    es: '🔬 Mamografía\n\nEs una radiografía especial de los senos (pechos). Dos placas de metal comprimen suavemente el pecho para tomar la imagen. Puede causar algo de incomodidad por unos segundos. Sirve para detectar bultos o tumores que no se sienten con la mano.',
    qu: '🔬 Mamografía\n\nSonqoñikikunata (ñuñu) rayos X nisqawan qhawaq taripay. Iskay plancha pisillata apretanmi imagen apanapaq. Pisi molestian pisqa segundollapim. Manakay runakunap makimpi rikusqankuta tarispan.',
    ay: '🔬 Mamografía\n\nChuymañanaka (ñuñu) rayos X-mpi qhawañataki. Iskay ch\'uxña platax pisita apretaña imagen apanapaq. Pisi incomodidad minutop ayntapi. Maki ukhamaw uñjiri bulto jark\'aña.'
  },
  'ecografia': {
    es: '🔬 Ecografía / Ultrasonido\n\nEs un examen que usa ondas de sonido (como el sonar de un barco) para ver el interior de tu cuerpo en una pantalla. No usa rayos X ni causa dolor. Un gel frío se aplica en la piel y se pasa un aparato. Dura 15-30 minutos.',
    qu: '🔬 Ecografía\n\nSonidop ondankuna aychakipa ukunta pantallapi rikuchinan taripay. Mana rayos X, mana nanachu. Frio gelmi quruykipi churasqa, aparato pasasqa. 15-30 minutokim.',
    ay: '🔬 Ecografía\n\nSonido ondanaka aychana ukuta pantallapi uñjañataki. Janiw rayos X, janiw ch_amakiti. Frio gel qurupana churataña, aparato pasataña. 15-30 minutola.'
  },
  'quimioterapia': {
    es: '💊 Quimioterapia\n\nEs un tratamiento con medicamentos fuertes (químicos) que atacan y destruyen las células cancerosas. Se puede dar por pastillas o por venas (suero). Puede causar cansancio, náuseas y pérdida de cabello, pero estos efectos son temporales. Es uno de los tratamientos más comunes contra el cáncer.',
    qu: '💊 Quimioterapia\n\nOnkuy celulasta wañuchinapaq atipayniyoq jaravekunawan hampiy. Pastillaswan o venasniykipi churay atikun. Sonqoy ñak\'ariyta, llipiptayta, chukchata chinkachiy munanman, ichaqa chaykuna pasakunmi. Onkuypa astawanraq hampinmi.',
    ay: '💊 Quimioterapia\n\nOnkiri célula wañuntañataki jarabe-naka satiña. Pastilla-mpi o venankiru churataña. Sarnaqaña ch_amaka, llipiptaña, chukcha chinkaña atini, ukax pasakiwa. Onkiri aski hampinakamawa.'
  },
  'radioterapia': {
    es: '💊 Radioterapia\n\nEs un tratamiento que usa rayos de alta energía (como rayos X muy fuertes) para destruir las células cancerosas. No se siente nada durante el tratamiento, como una radiografía normal. Las sesiones duran solo minutos y se repiten varios días. Puede causar cansancio y rojez en la piel.',
    qu: '💊 Radioterapia\n\nOnkuy celulasta wañuchinapaq hatun energiayuq rayoswan hampiy. Mana imatapas sientikunchu, radiografía hina. Sesionkunaqa minutollo, sapa p\'unchaw kutirinmi. Sonqoy ñak\'ariyta, qaraspa puka kasqanta munanman.',
    ay: '💊 Radioterapia\n\nOnkiri célula wañuntañataki jacha energía rayos-mpi hampiy. Janiw imatapis sientitkiti, radiografía-hina. Sesionax minutola, sapa uru kutiyi. Sarnaqaña ch_amaka, qara ruphataña atini.'
  },
  'mastectomia': {
    es: '🏥 Mastectomía\n\nEs una cirugía para extirpar (sacar) uno o ambos senos cuando tienen cáncer. Puede ser parcial (solo parte del seno) o total. Es un procedimiento quirúrgico que requiere anestesia y recuperación en el hospital. Hay opciones de reconstrucción después.',
    qu: '🏥 Mastectomía\n\nOnkuy onkuriqta ñuñuta (seno) operacionwan qhitunapaq. Pisillata qhituy (parcial) o tukuyninta (total) atikun. Anestesiata munan, hospitalpim recuperakuy. Despuesqa ruwariyta (reconstruccion) puedekun.',
    ay: '🏥 Mastectomía\n\nOnkiri ñuñu (seno) operacionmpi qhituña. Jisk\'a (parcial) o tukuy (total) qhituña atini. Anestesia munaña, hospitalkama sanaña. Qhipkiriwa reconstrucción atini.'
  },
  'conizacion': {
    es: '🏥 Conización\n\nEs una pequeña cirugía para sacar un trozo en forma de cono del cuello del útero (cérvix). Se hace cuando el PAP o la colposcopía encuentran células anormales. Puede hacerse con bisturí o láser. Se usa anestesia local. Dura unos 30 minutos.',
    qu: '🏥 Conización\n\nQarirurikipi cono formapi pisillata qhituy operacionmi. PAP o colposcopíapi mana allin celulasta tarikuptinmi ruwakunan. Bisturí o laser nisqawan. Anestesia local munan. 30 minutollam.',
    ay: '🏥 Conización\n\nQarinxa cono uñnaqata jisk\'a qhituña operación. PAP o colposcopía mana waliki célula taripkaspanwa luraña. Bisturí o laser-mpiwa. Anestesia local munaña. 30 minutola.'
  },
  'histerectomia': {
    es: '🏥 Histerectomía\n\nEs una cirugía para extirpar (sacar) el útero. Puede incluir también los ovarios y las trompas. Después de esta operación no podrás quedar embarazada. Se hace bajo anestesia general. La recuperación en hospital es de 2-5 días y total en casa de varias semanas.',
    qu: '🏥 Histerectomía\n\nWijsa ukunmanta wiksata (útero) qhitunapaq operacionmi. Ovarioskunatawanpas qhituyta atikun. Chay qhipam mana wawayyuq kanki. Anestesia general munan. 2-5 p\'unchaw hospitalpi, simana askha wasipim recuperakuy.',
    ay: '🏥 Histerectomía\n\nWijsa ukana (útero) qhituña operación. Ovario-nakampis qhituña atini. Ukhamawa mana wawaru utjañakiti. Anestesia general munaña. 2-5 uru hospitalpi, simananaka wasiru sanaña.'
  },
  'metastasis': {
    es: '⚠️ Metástasis\n\nEs cuando el cáncer se ha extendido desde donde empezó hacia otras partes del cuerpo, como huesos, pulmones o hígado, a través de la sangre o los ganglios. Es el estadio más avanzado. El tratamiento se enfoca en controlar el cáncer y mantener la mejor calidad de vida posible.',
    qu: '⚠️ Metástasis\n\nOnkuy qallarisqanmanta wak aypakuqkunaman, tullukuna, sunkunkuna, hígadoman puririnman yawarniyoq. Estadio mas avanzadonmi. Hampiqa onkuyta controlaspa kawsayta allinchay.',
    ay: '⚠️ Metástasis\n\nOnkiri nayra lugaratxa wak aychanakaru, tullu, phuxi, higado-kama yawarmpi sarnaqaña. Estadio mas avanzadom. Hampix onkiri controlañataki kawsawi allintañataki.'
  },
  'benigno': {
    es: '📊 Benigno / Maligno\n\n🟢 BENIGNO: El tumor NO es cáncer. No se extiende a otras partes del cuerpo. Generalmente no es peligroso, aunque puede quitarse si molesta.\n\n🔴 MALIGNO: SÍ es cáncer. Puede crecer y extenderse. Necesita tratamiento urgente.',
    qu: '📊 Benigno / Maligno\n\n🟢 BENIGNO: Tumor mana onkuychu. Mana wak lugarkunaman purinchu. Generalmente mana manchachikuychu.\n\n🔴 MALIGNO: Onkuymi. Wiñanman, purinmanpas. Kallpaqta hampina munan.',
    ay: '📊 Benigno / Maligno\n\n🟢 BENIGNO: Tumor janiw onkiriwa. Janiw wak lugaranakaru sarnaqiti. Janiw manchxatañakitiw.\n\n🔴 MALIGNO: Onkiriwa. Wiñaña atini, sarnaqaña atini. Janqu hampina munaña.'
  },
  'anatomia patologica': {
    es: '🔬 Anatomía Patológica\n\nEs el departamento del hospital donde los médicos especialistas (patólogos) analizan con microscopio los tejidos sacados en biopsias y cirugías. Ellos determinan si las células son cancerosas o no, y qué tipo de cáncer es. Su informe es clave para decidir el tratamiento.',
    qu: '🔬 Anatomía Patológica\n\nHospitalpi especialistakuna (patólogos) biopsiamanta qhituqkunata microscopio nisqawan qhawankun. Paykuṇam yachanku onkuychus tiyanchu, ima onkuytataqchus. Paykunap informenmi hampinapaq yuyayta qun.',
    ay: '🔬 Anatomía Patológica\n\nHospitalpi especialistanaka (patólogo) biopsia-txa qhituqanaka microscopio-mpi qhawani. Payanakawa yatini onkiri utjicha janicha, kunsa onkiri. Yatiyañanakawa hampina yuyayta quña.'
  },
  'citologia oncologica': {
    es: '🔬 Citología Oncológica\n\nEs el análisis de células bajo el microscopio para buscar células anormales o cancerosas. Es similar al PAP pero puede hacerse de diferentes partes del cuerpo. Es un análisis rápido y no invasivo (no requiere cirugía). El resultado ayuda al médico a decidir los próximos pasos.',
    qu: '🔬 Citología Oncológica\n\nCelulasta microscopiopi mana allinkunata maskay. PAP nisqaman rikch\'akun, aypa wak lugarkunapipis ruwakunan. Mana operacionta munan. Tarispanqa hampikiq decidenqa ima ruwayta.',
    ay: '🔬 Citología Oncológica\n\nCélula mana waliki microscopio-mpi maskataña. PAP-naka ukhamarakiwa, wak lugaranakankiru. Janiw operación munaña. Tariptaxa médiku kamachaña.'
  },
  'ganglio centinela': {
    es: '🔬 Ganglio Centinela\n\nEs el primer ganglio linfático al que podría llegar el cáncer si se extiende. Los médicos lo identifican y lo analizan durante la cirugía para saber si el cáncer ya se propagó. Es como el "guardián" que protege al resto del cuerpo. Si está libre de cáncer, es muy buena señal.',
    qu: '🔬 Ganglio Centinela\n\nOnkuy purinman kaqtin ñawpaq chayanan ganglio nisqami. Operacionpi hampikiq taripanmi onkuychus purinña chayta yachanapaqa. "Wawqe qhawaq" hina. Mana onkuy chayniyoqtinqa, allin señalmi.',
    ay: '🔬 Ganglio Centinela\n\nOnkiri sarnaqkaspanxa nayriri ganglio. Operacionpi médiku taripaña onkiri sarnaqicha janicha yatintañataki. "Qhawiri" ukhamarakiwa. Jani onkiri utjkaspanxa, waliki señalwa.'
  },
  'oncologo': {
    es: '👨‍⚕️ Oncólogo\n\nEs el médico especialista en cáncer. Diagnostica, trata y hace seguimiento a los pacientes con cáncer. En el INEN hay diferentes tipos: oncólogos clínicos (tratamiento con medicamentos), cirujanos oncólogos (operaciones) y radio-oncólogos (radioterapia). Ellos trabajan en equipo para darte el mejor tratamiento.',
    qu: '👨‍⚕️ Oncólogo\n\nOnkuypi yachaqsapa hampikiqmi. Tariqun, hampiqun, onkuyuq pacientekunata qhawaqun. INEN-pi tukuy laya oncólogos kan: oncólogo clínico (jaravekunawan), cirujano oncólogo (operaciones), radio-oncólogo (radioterapia). Huk llaqtapi llamk\'anku allin hampinapaq.',
    ay: '👨‍⚕️ Oncólogo\n\nOnkiri yatiri médiku. Taripani, hampini, onkiri pacientexa qhawani. INEN-pi tukuy laya oncólogo utji: clínico (jarabe-naka), cirujano (operaciones), radio-oncólogo (radioterapia). Suma hampitañataki junt\'u llamk\'ani.'
  },
  'sisinen': {
    es: '📋 SISINEN\n\nEs el Sistema de Información del INEN (Sistema Informático). Es la plataforma digital donde se registran todos los datos de los pacientes del INEN: historia clínica, citas, resultados, tratamientos. Es el sistema interno que usan los médicos y personal del INEN para gestionar tu atención.',
    qu: '📋 SISINEN\n\nINEN-pa información sistemanmi. Chaypim tukuy pacientekunap datosninku guardakunan: historia clínica, citas, tarisqakuna, hampikuna. INEN-pi llamk\'aqkuna chay sistemata usanku atencionniykita ordenarpaq.',
    ay: '📋 SISINEN\n\nINEN-n información sistema. Ukanwa tukuy paciente datanaka guardataña: historia clínica, cita, lurawinaka, hampinaka. INEN-kama llamk\'irinaka ukax usañataki atencion-nakamaki.'
  },
  'cuidados paliativos': {
    es: '💊 Cuidados Paliativos\n\nSon los cuidados especiales para aliviar el dolor y los síntomas cuando el cáncer está muy avanzado, sin intentar curar la enfermedad. El objetivo es que la persona viva con la mejor calidad de vida posible. Incluyen control del dolor, apoyo emocional y ayuda para la familia. No significan "rendirse", sino vivir mejor.',
    qu: '💊 Cuidados Paliativos\n\nOnkuy astawanraq kaqtin nanayta pisichiq, síntomasta atipanapaq yanapaq atiencionkuna. Mana onkuyta hampiqchu, ichaqa kawsayta allinchaq. Nanayta controlaq, yuyay yanapay, familiapaq yanapay ima. Mana "chinkaq" nisqachu, astawanraq allin kawsayqa.',
    ay: '💊 Cuidados Paliativos\n\nOnkiri jachatata ch_amaka pisintañataki, síntoma atiñataki atención. Janiw hampintañakitiw onkiri, ichaxa kawsawi alintañataki. Ch_amaka controlana, amuyu yanapana, familia yanapana. Janiw "wanuntañakitiw", aski kawsañataki.'
  }
};

function getDictEntry(term) {
  const key = term.toLowerCase()
    .replace(/á/g,'a').replace(/é/g,'e').replace(/í/g,'i').replace(/ó/g,'o').replace(/ú/g,'u')
    .replace(/ñ/g,'n').replace(/[^a-z0-9 ]/g,'').trim();
  // Try exact match first
  if (MED_DICT[key]) return MED_DICT[key];
  // Try partial match
  const k = Object.keys(MED_DICT).find(k => key.includes(k) || k.includes(key.split(' ')[0]));
  return k ? MED_DICT[k] : null;
}

async function translateTerm(){
  const term=document.getElementById('term-input').value.trim(); if(!term)return;
  const box=document.getElementById('trans-result'); const txt=document.getElementById('trans-text');
  box.style.display='block';
  // Try local dictionary first
  const local = getDictEntry(term);
  if(local){
    txt.textContent = local[currentLang] || local.es;
    return;
  }
  // Fallback: try Claude API
  const loadMsg=currentLang==='qu'?'Rijchachkani...':currentLang==='ay'?'Amtasktha...':'Traduciendo...';
  txt.innerHTML='<div class="ai-loading"><div class="spinner"></div>'+loadMsg+'</div>';
  let sys,prompt;
  if(currentLang==='qu'){
    sys='Eres Warmi, experta en salud intercultural del INEN. Explica términos médicos en Quechua (Runasimi) sencillo.';
    prompt='Explica en Quechua este término: "'+term+'". Máximo 4 oraciones.';
  } else if(currentLang==='ay'){
    sys='Eres Warmi, experta en salud intercultural. Explica términos médicos en Aymara sencillo.';
    prompt='Explica en Aymara este término: "'+term+'". Máximo 4 oraciones.';
  } else {
    sys='Eres Warmi, traductora médica del INEN. Explica en español simple para pacientes de provincia.';
    prompt='Explica este término médico en palabras simples: "'+term+'". ¿Qué es, para qué sirve?';
  }
  try{txt.textContent=await callClaude(prompt,sys);}
  catch(e){txt.textContent='⚠️ Sin conexión a internet.\n\nBusca este término en el glosario de abajo o consulta a tu médico del INEN.';}
}
function quickTrans(t){document.getElementById('term-input').value=t;translateTerm();}
function filterGlos(cat){
  document.querySelectorAll('#glos-grid .glos-item').forEach(function(el){
    el.style.display=(!cat||el.dataset.cat===cat)?'block':'none';
  });
  document.querySelectorAll('#glos-filters button').forEach(function(b,i){
    b.style.background=(!cat&&i===0)?'var(--purple)':'';
    b.style.color=(!cat&&i===0)?'white':'';
  });
}
function filterGlos(cat){
  document.querySelectorAll('#glos-grid .glos-item').forEach(el=>{
    el.style.display=(!cat||el.dataset.cat===cat)?'block':'none';
  });
  document.querySelectorAll('#glos-filters button').forEach((b,i)=>{
    b.style.background=(!cat&&i===0||cat&&b.dataset&&b.getAttribute('data-t')==='glos_'+cat)?'var(--purple)':'';
    b.style.color=(!cat&&i===0||cat&&b.getAttribute('data-t')==='glos_'+cat)?'white':'';
  });
}

function runAI(e){
  e.stopPropagation();
  const row=e.target.closest('tr');
  const cells=row?row.querySelectorAll('td'):null;
  const name=cells?cells[0].querySelector('b').textContent:'María Q.';
  const days=cells?cells[1].textContent.trim():'3';
  const stage=cells?cells[2].textContent.trim():'3/9';
  const riskEl=cells?cells[3].querySelector('.sem-pill'):null;
  const risk=riskEl?riskEl.textContent.trim():'Amarillo';
  const box=document.getElementById('ai-result-dash'); const txt=document.getElementById('ai-text-dash');
  box.style.display='block';
  txt.innerHTML='<div class="ai-loading"><div class="spinner"></div>Analizando...</div>';
  setTimeout(()=>{
    const responses={
      'Rojo':`🔴 SEMÁFORO ROJO — Prioridad ALTA\n\n👤 Paciente: ${name}\n⏰ Días en proceso: ${days} (SUPERA promedio de 4.9 días)\n📋 Etapa: ${stage}\n\n🚨 BARRERAS CRÍTICAS IDENTIFICADAS:\n• Riesgo de pérdida de seguimiento por tiempo excedido\n• Posible barrera económica o geográfica severa\n• Sin confirmación de próxima cita\n\n✅ ACCIONES INMEDIATAS:\n1. CONTACTAR HOY via WarmiVoz o WhatsApp Warmi\n2. Coordinar transporte subsidiado si es paciente de provincia\n3. Escalar a coordinadora de casos para resolución en 24h\n\n⏱ Tiempo sin avance: ${days} días — REQUIERE INTERVENCIÓN URGENTE`,
      'Amarillo':`🟡 SEMÁFORO AMARILLO — Prioridad Media\n\n👤 Paciente: ${name}\n⏰ Días en proceso: ${days} (dentro del promedio: 4.9 días)\n📋 Etapa: ${stage}\n\n⚠️ BARRERAS IDENTIFICADAS:\n• Distancia geográfica (provincia → Lima)\n• Posible barrera idiomática (quechua/aymara)\n• Dependencia de transporte interprovincial\n\n✅ ACCIONES RECOMENDADAS:\n1. Confirmar cita 48h antes via WhatsApp Warmi o SMS\n2. Enviar checklist de documentos al cuidador autorizado\n3. Activar alerta de viaje si no responde en 24h\n\n📊 Seguimiento: Revisar en próximas 48 horas`,
      'Verde':`🟢 SEMÁFORO VERDE — En curso normal\n\n👤 Paciente: ${name}\n⏰ Días en proceso: ${days} (óptimo)\n📋 Etapa: ${stage}\n\n✅ ESTADO:\n• Proceso dentro del tiempo esperado\n• Cita próxima confirmada\n• Documentación completa\n\n📋 ACCIONES DE RUTINA:\n1. Enviar recordatorio 24h antes de la cita\n2. Confirmar disponibilidad de acompañante\n3. Mantener monitoreo estándar\n\n📊 Sin intervención urgente requerida`
    };
    const key=Object.keys(responses).find(k=>risk.includes(k))||'Amarillo';
    txt.textContent=responses[key];
  },1200);
}

function generateBriefing(){
  const box=document.getElementById('brief-output'); const txt=document.getElementById('brief-text');
  const pac=document.getElementById('brief-paciente').value;
  const tipo=document.getElementById('brief-tipo').value;
  box.style.display='block';
  txt.innerHTML='<div class="ai-loading"><div class="spinner"></div>Generando briefing...</div>';
  const now=new Date().toLocaleDateString('es-PE');
  const data={
    'María Quispe':{
      'completo':`📋 BRIEFING ONCOLÓGICO · OncoWarmi 360\nFecha: ${now}\n\n👤 PACIENTE\nMaría Quispe C. · 52 años · Ayacucho\nIdioma: Quechua / Español básico\nAcompañante: Rosa Quispe (hija)\n\n📊 ESTADO\nEtapa: 3/9 · Días: 3 · Semáforo: 🟡 AMARILLO\nViajes evitados: 2 · Ahorro: S/ 240\n\n⚠️ BARRERAS\n• Distancia: Ayacucho → Lima (9h)\n• Barrera idiomática: quechua\n• Baja alfabetización digital\n\n🔔 ALERTAS\n• Cita: 18 jun · 9:00 a.m. · Módulo Admisión 3\n• Resultado examen pendiente\n\n✅ PRÓXIMOS PASOS\n1. Apertura Historia Clínica (18 jun)\n2. Triaje oncológico\n3. Exámenes laboratorio\n\n💊 RUTAS ACTIVAS\n• Ruta diagnóstica principal\n• Apoyo psicológico (ansiedad moderada)\n• Registro dolor EVA activo`,
      'ejecutivo':`📋 RESUMEN EJECUTIVO\nMaría Quispe · 52a · Ayacucho\nEtapa 3/9 · 🟡 AMARILLO · Día 3\nCita: 18 jun 9am · 2 viajes evitados`,
      'alertas':`🚨 ALERTAS · María Quispe\n⚠️ AMARILLO Día 3 · Resultado pendiente\nCita 18 jun 9am — confirmar recepción`
    },
    'Carmen Rojas':{
      'completo':`📋 BRIEFING · Carmen Rojas V. · 45a · Huancavelica\nEtapa 2/9 · Días: 9 · 🔴 ROJO\n\n🚨 SIN AVANCE 4 días\nACCIÓN URGENTE: Contactar HOY`,
      'ejecutivo':`📋 Carmen Rojas · 🔴 ROJO · Día 9 / Etapa 2/9\n⚡ REQUIERE INTERVENCIÓN URGENTE`,
      'alertas':`🚨 CRÍTICO — Carmen Rojas · 9 días etapa 2/9\n⚡ ACCIÓN HOY`
    },
    'Ana López':{
      'completo':`📋 BRIEFING · Ana López M. · 38a · Lima\nEtapa 1/9 · Día 1 · 🟢 VERDE\n\n✅ Proceso iniciado · Sin barreras · Estado normal`,
      'ejecutivo':`📋 Ana López · Lima · 🟢 VERDE · Día 1`,
      'alertas':`✅ Ana López · Sin alertas activas`
    }
  };
  const pKey=Object.keys(data).find(k=>pac.includes(k))||'María Quispe';
  const tKey=tipo.includes('completo')||tipo.toLowerCase().includes('briefing')?'completo':tipo.includes('ejecutivo')||tipo.toLowerCase().includes('resumen')?'ejecutivo':'alertas';
  setTimeout(()=>{ txt.textContent=data[pKey][tKey]; }, 900);
}

async function getDolOrient(){
  const consult=document.getElementById('dolor-consult').value.trim(); if(!consult)return;
  const box=document.getElementById('dolor-ai-output'); const txt=document.getElementById('dolor-ai-text');
  box.style.display='block'; txt.innerHTML='<div class="ai-loading"><div class="spinner"></div>Analizando...</div>';
  try{txt.textContent=await callClaude(`Paciente oncológica consulta sobre dolor: "${consult}". Orienta sobre posibles causas, cuándo consultar urgente y 2 medidas de confort.`);}
  catch(e){txt.textContent='Error.';}
}

async function getPensamientoCalma(){
  const txt=document.getElementById('calma-text');
  txt.innerHTML='<div class="ai-loading"><div class="spinner"></div>Buscando palabras...</div>';
  try{txt.textContent=await callClaude('Genera un pensamiento reconfortante breve para mujer de Ayacucho con diagnóstico oncológico. Cálido y esperanzador. 3-4 líneas.',
    'Voz de apoyo emocional para pacientes oncológicas. Habla con calidez y esperanza.');}
  catch(e){txt.textContent='Warmi está aquí contigo. Eres más fuerte de lo que crees. 💜';}
}

/* UI */
function toggleCheck(el){
  el.classList.toggle('checked');
  el.querySelector('.check-box').textContent=el.classList.contains('checked')?'✓':'';
}
function evalChecklist(){
  const items=document.querySelectorAll('#checklist-items .check-item');
  const checked=[...items].filter(i=>i.classList.contains('checked')).length;
  const res=document.getElementById('check-result'); res.style.display='block';
  const t=TR[currentLang];
  if(checked===0) res.innerHTML=`<div class="alert alert-green"><strong>🚫 ${t.chk_status}</strong>${t.chk_body}</div>`;
  else if(checked>=3) res.innerHTML=`<div class="alert alert-warn"><strong>✅</strong>Tienes ${checked} razones confirmadas. Prepara documentos y llega 30 min antes.</div>`;
  else res.innerHTML=`<div class="alert alert-info"><strong>⚠️</strong>Tienes ${checked} razón(es). Confirma con WarmiVoz antes de salir.</div>`;
}

const gadScores=[0,0,0,0];
function selectGad(el,q,val){
  el.closest('.gad-opts').querySelectorAll('.gad-opt').forEach(o=>o.classList.remove('selected'));
  el.classList.add('selected'); gadScores[q]=val;
}
function evalGad(){
  const total=gadScores.reduce((a,b)=>a+b,0);
  const res=document.getElementById('gad-result'); res.style.display='block';
  let msg='',cls='';
  if(total<=4){msg='✅ <strong>Ansiedad leve</strong><br>Estás manejando bien. Warmi siempre está aquí.';cls='alert-green';}
  else if(total<=9){msg='⚠️ <strong>Ansiedad moderada</strong><br>Es normal. Te recomendamos apoyo psicológico del INEN.';cls='alert-warn';}
  else{msg='🔴 <strong>Ansiedad importante</strong><br>Mereces apoyo especializado. Visita Psicología Oncológica INEN Piso 3 o llama al 113.';cls='alert-pink';}
  res.innerHTML=`<div class="alert ${cls}">${msg}<br><small>Puntaje: ${total}/12 — No es diagnóstico médico</small></div>`;
}

const evaL=['Sin dolor','Casi nada','Muy leve','Leve','Incómodo','Moderado','Moderado fuerte','Fuerte','Muy fuerte','Intenso','Insoportable'];
const evaC=['#22c55e','#4ade80','#86efac','#fbbf24','#f59e0b','#fb923c','#f97316','#ef4444','#dc2626','#b91c1c','#7f1d1d'];
function updateEva(v){
  document.getElementById('eva-num').textContent=v;
  document.getElementById('eva-num').style.color=evaC[v];
  document.getElementById('eva-desc').textContent=evaL[v];
  const al=document.getElementById('dolor-alerta');
  if(parseInt(v)>=8){al.style.display='block';al.innerHTML=`<div class="alert alert-warn"><strong>⚠️ Dolor severo EVA ${v}</strong>Consulta al médico hoy. Urgencias INEN o 113.</div>`;}
  else al.style.display='none';
}

function togglePain(btn){btn.classList.toggle('btn-orange');}
function guardarDolor(){
  const v=document.getElementById('eva-slider').value;
  const nota=document.getElementById('dolor-nota').value;
  const c=document.getElementById('pain-entries');
  const bgc=parseInt(v)<=3?'var(--green-l)':parseInt(v)<=6?'var(--amber-l)':'var(--red-l)';
  const col=parseInt(v)<=3?'var(--green)':parseInt(v)<=6?'var(--amber)':'var(--red)';
  const e=document.createElement('div'); e.className='pain-entry';
  e.innerHTML=`<div class="pain-badge" style="background:${bgc};color:${col};">${v}</div><div style="flex:1;"><div style="font-size:13px;font-weight:600;">${evaL[v]}</div><div style="font-size:12px;color:var(--text2);">${nota||'Sin nota'} · Ahora</div></div><div class="tag" style="background:${bgc};color:${col};">EVA ${v}</div>`;
  c.prepend(e); alert('✅ Registrado correctamente');
}

function psicoTab(tab){
  ['screen','apoyo','tecnicas','recursos'].forEach(t=>document.getElementById('psico-'+t).style.display=t===tab?'block':'none');
  document.querySelectorAll('#psico-tabs .tab').forEach((el,i)=>el.classList.toggle('active',['screen','apoyo','tecnicas','recursos'][i]===tab));
}
function dolorTab(tab){
  ['eva','diario','orientacion'].forEach(t=>document.getElementById('dolor-'+t).style.display=t===tab?'block':'none');
  document.querySelectorAll('#dolor-tabs .tab').forEach((el,i)=>el.classList.toggle('active',['eva','diario','orientacion'][i]===tab));
}

let callActive=false,callTimer=null,callSecs=0;
function setCallLang(btn){document.querySelectorAll('.call-lang').forEach(b=>b.classList.remove('active','btn-primary'));btn.classList.add('active','btn-primary');}
function toggleCall(){
  callActive=!callActive;
  const icon=document.getElementById('call-icon');
  const status=document.getElementById('call-status');
  const btn=document.getElementById('call-btn');
  const t=TR[currentLang];
  if(callActive){
    icon.textContent='📲'; status.textContent='En consulta... 0:00';
    btn.textContent='⏹ Finalizar'; btn.style.background='var(--red)';
    callTimer=setInterval(()=>{callSecs++;const m=Math.floor(callSecs/60),s=callSecs%60;status.textContent=`En consulta... ${m}:${s.toString().padStart(2,'0')}`;},1000);
  }else{
    clearInterval(callTimer);callSecs=0;icon.textContent='✅';status.textContent='Consulta finalizada';
    btn.textContent=t.call_btn;btn.style.background='var(--purple)';
    setTimeout(()=>{icon.textContent='📞';status.textContent=t.call_ready;callActive=false;},3000);
  }
}

let breathActive=false;
const bSteps=[{text:'Inhala\n(4s)',cls:'inhale',d:4000},{text:'Mantén\n(7s)',cls:'inhale',d:7000},{text:'Exhala\n(8s)',cls:'exhale',d:8000}];
async function startBreath(){
  if(breathActive)return; breathActive=true;
  const btn=document.getElementById('breath-btn');
  const circle=document.getElementById('breath-circle');
  const txt=document.getElementById('breath-text');
  btn.disabled=true; btn.textContent='Respirando...';
  for(let i=0;i<3;i++){
    const s=bSteps[i]; circle.textContent=s.text; circle.className='breath-circle '+s.cls;
    txt.textContent=i===0?'Inhala por la nariz':i===1?'Aguanta la respiración':'Exhala lentamente';
    await new Promise(r=>setTimeout(r,s.d));
  }
  circle.className='breath-circle'; circle.textContent='¡Bien hecho!';
  txt.textContent='¿Otro ciclo?'; btn.disabled=false; btn.textContent='🌬️ Otro ciclo'; breathActive=false;
}

show('inicio');

function closeConsent(){
  const checked = document.getElementById('consent-check').checked;
  const warn = document.getElementById('consent-warn');
  if(!checked){
    warn.style.display = 'block';
    document.getElementById('consent-check').style.outline = '2px solid #ef4444';
    return; // ALWAYS block until checked
  }
  warn.style.display = 'none';
  document.getElementById('consent-modal').style.display='none';
  document.getElementById('warmi-float').style.display='block';
}

function setLangConsent(lang){
  setLang(lang);
  ['es','qu','ay'].forEach(function(l){
    var b=document.getElementById('cl-'+l);
    if(b){
      b.className=l===lang?'btn btn-primary btn-sm':'btn btn-ghost btn-sm';
      b.style.flex='1';
    }
  });
}

function toggleWarmiChat(){
  var q=document.getElementById('warmi-quick');
  q.style.display=(q.style.display==='none'||!q.style.display)?'block':'none';
}

var gpsStep=0, gpsTimer=null;
function simulateGPS(){
  if(gpsTimer) return;
  var steps=document.querySelectorAll('.gps-step');
  var btn=document.getElementById('gps-btn');
  btn.textContent='Navegando...'; btn.style.background='var(--green)';
  gpsStep=0;
  steps.forEach(function(s,i){
    s.style.background=i===0?'var(--green-l)':'var(--bg)';
    s.style.borderLeft=i===0?'3px solid var(--green)':'none';
  });
  gpsTimer=setInterval(function(){
    gpsStep++;
    if(gpsStep>=steps.length){
      clearInterval(gpsTimer); gpsTimer=null;
      btn.textContent='Llegaste al INEN'; btn.style.background='var(--purple)';
      return;
    }
    steps.forEach(function(s,i){
      s.style.background=i===gpsStep?'var(--green-l)':i<gpsStep?'#f0fdf4':'var(--bg)';
      s.style.borderLeft=i===gpsStep?'3px solid var(--green)':'none';
    });
  },2000);
}

// Map translation keys - NO apostrophes in Aymara
var mapKeys={
  es:{
    nav_mapa:'Mapa INEN', mapa_h:'Mapa del INEN', mapa_p:'Planta baja · Ruta de la paciente',
    mapa_al:'Tu destino: Modulo Admision 3',
    mapa_al_b:'Ingresa por Av. Angamos, sigue flechas azules hacia CITA, luego ADMISION.',
    gps_tit:'Navegacion (Simulada)', gps_pos:'Posicion: Av. Angamos / Jr. Camana',
    gps_dist:'~3 minutos caminando al ingreso principal',
    gps_s1:'Ingresa por Av. Angamos (entrada principal)',
    gps_s2:'Sigue flechas azules hacia CITA en el pasillo central',
    gps_s3:'Gira a la izquierda hacia ADMISION',
    gps_s4:'Llega a Modulo Admision 3 (tu cita: 9:00 a.m.)',
    gps_btn:'Iniciar navegacion',
    mapa_plant:'Planta baja INEN - Ruta de la paciente',
    mapa_note:'Mapa referencial simplificado · INEN · Av. Angamos 2520, Surquillo',
    mapa_puntos:'Puntos clave del INEN',
    pt_admision:'Modulo Admision 3 - TU DESTINO', pt_admision_d:'Planta baja, ala izquierda · 9:00 a.m.',
    pt_citas:'Modulo Citas (ventanilla 7)', pt_citas_d:'Obtencion 1ra cita · Ingreso Av. Angamos',
    pt_psico_map:'Psicologia Oncologica', pt_psico_d:'Planta baja, ala sur',
    pm_mapa:'Mapa INEN', pm_mapa_s:'Ruta de la paciente · Navegacion simulada'
  },
  qu:{
    nav_mapa:'INEN Qhawana', mapa_h:'INEN Qhawana', mapa_p:'Ñawpaq pata · Paciente ñan',
    mapa_al:'Purinayki: Modulo Admision 3',
    mapa_al_b:'Av. Angamos-manta yaykuy, ankas ichiqata - CITA - ADMISION.',
    gps_tit:'GPS (Rurasqa)', gps_pos:'Kay pachapin: Av. Angamos',
    gps_dist:'~3 minuto purinapaq',
    gps_s1:'Yaykuy Av. Angamos-manta (hatun punku)',
    gps_s2:'Ankas ichiqata sigi - CITA pasillo-pi',
    gps_s3:'Lloqsiy - ADMISION-man',
    gps_s4:'Chayay Admision 3 Modulo (cita: 9:00 a.m.)',
    gps_btn:'Puriyta qallariy',
    mapa_plant:'INEN ñawpaq pata',
    mapa_note:'Qhawana qillqa · INEN · Av. Angamos 2520',
    mapa_puntos:'INEN-pi hatun wasikunan',
    pt_admision:'Admision 3 Modulo - PURINAYKI', pt_admision_d:'Ñawpaq pata · Lloqsiy · 9:00 a.m.',
    pt_citas:'Cita modulo (7 ventanilla)', pt_citas_d:'1ra cita chaskiy · Av. Angamos yaykuy',
    pt_psico_map:'Psikolojia Oncologica', pt_psico_d:'Ñawpaq pata, sur ala',
    pm_mapa:'INEN Qhawana', pm_mapa_s:'Paciente ñan · GPS rurasqa'
  },
  ay:{
    nav_mapa:'INEN Qhawana', mapa_h:'INEN Qhawana', mapa_p:'Nayriri pata · Paciente thakhi',
    mapa_al:'Jutañataki: Modulo Admision 3',
    mapa_al_b:'Av. Angamos-txa mantani, anqaxa - CITA - ADMISION.',
    gps_tit:'GPS (Rurasiri)', gps_pos:'Jichha: Av. Angamos',
    gps_dist:'~3 minuto sartañataki',
    gps_s1:'Mantani Av. Angamos-txa (nayra punku)',
    gps_s2:'Anqaxa sarnaqaña - CITA-kama',
    gps_s3:'Cheqara - ADMISION-kama',
    gps_s4:'Jutxaña Admision 3 Modulo (9:00 a.m.)',
    gps_btn:'Sarnaqaña qalltaña',
    mapa_plant:'INEN nayriri pata',
    mapa_note:'Qhawana qillqa · INEN · Av. Angamos 2520',
    mapa_puntos:'INEN-kama jatun utanaka',
    pt_admision:'Admision 3 Modulo - JUTAÑATAKI', pt_admision_d:'Nayriri pata · 9:00 a.m.',
    pt_citas:'Cita modulo (7 ventanilla)', pt_citas_d:'1ra cita akatantawi · Av. Angamos',
    pt_psico_map:'Psikolojia Oncologica', pt_psico_d:'Nayriri pata, sur ala',
    pm_mapa:'INEN Qhawana', pm_mapa_s:'Paciente thakhi · GPS rurasiri'
  }
};

Object.keys(mapKeys).forEach(function(lang){
  Object.assign(TR[lang], mapKeys[lang]);
});
pageMeta['mapa']=['pm_mapa','pm_mapa_s'];

// ──── MODO CUIDADOR ────
var cuidadores = [
  {id:1, nombre:'Rosa Quispe', dni:'47891234', parentesco:'Hija', telefono:'+51 999 123 456', ubicacion:'Lima', alertas:['cita','viaje','doc'], activo:true}
];
var nextCuidId = 2;

function agregarCuidador(){
  const nombre    = document.getElementById('cuid-nombre').value.trim();
  const dni       = document.getElementById('cuid-dni').value.trim();
  const parentesco= document.getElementById('cuid-parentesco').value;
  const telefono  = document.getElementById('cuid-telefono').value.trim();
  const ubicacion = document.getElementById('cuid-ubicacion').value.trim();
  const errEl     = document.getElementById('cuid-form-error');

  // Validations
  if(!nombre || !dni || !parentesco || !telefono){
    errEl.style.display='block';
    errEl.textContent='⚠️ Por favor completa los campos obligatorios: Nombre, DNI, Parentesco y Celular.';
    return;
  }
  if(dni.length !== 8 || !/^\d+$/.test(dni)){
    errEl.style.display='block';
    errEl.textContent='⚠️ El DNI debe tener exactamente 8 dígitos numéricos.';
    return;
  }
  errEl.style.display='none';

  // Build alertas list
  var alertas = [];
  if(document.getElementById('cuid-alerta-cita').checked)   alertas.push('cita');
  if(document.getElementById('cuid-alerta-viaje').checked)  alertas.push('viaje');
  if(document.getElementById('cuid-alerta-result').checked) alertas.push('resultado');
  if(document.getElementById('cuid-alerta-doc').checked)    alertas.push('doc');

  var nuevo = {id:nextCuidId++, nombre, dni, parentesco, telefono, ubicacion:ubicacion||'No indicada', alertas, activo:true};
  cuidadores.push(nuevo);
  renderCuidadores();

  // Clear form
  ['cuid-nombre','cuid-dni','cuid-telefono','cuid-ubicacion'].forEach(function(id){
    document.getElementById(id).value='';
  });
  document.getElementById('cuid-parentesco').value='';

  // Add alert to log
  addCuidAlert('✅ Nuevo cuidador registrado: '+nombre, 'green');
}

function renderCuidadores(){
  var list = document.getElementById('cuid-list');
  var empty = document.getElementById('cuid-empty');
  var activos = cuidadores.filter(function(c){ return c.activo; });
  if(activos.length === 0){
    list.innerHTML=''; empty.style.display='block'; return;
  }
  empty.style.display='none';
  list.innerHTML = activos.map(function(c){
    var icons = {cita:'📅', viaje:'🚌', resultado:'🔬', doc:'📋'};
    var alertaTags = c.alertas.map(function(a){
      return '<span class="tag tag-purple" style="font-size:10px;">'+icons[a]+' '+a+'</span>';
    }).join('');
    var parentEmoji = {Hija:'👩', 'Hija/o':'👧', 'Esposo/a':'👫', 'Madre/Padre':'👵', 'Hermana/o':'👫', 'Otro familiar':'👤', 'Amiga/o de confianza':'🤝'}[c.parentesco]||'👤';
    return '<div class="cuid-card" data-id="'+c.id+'" style="display:flex;align-items:flex-start;gap:12px;padding:12px;background:var(--bg);border-radius:10px;margin-bottom:8px;border:1.5px solid var(--border);">'
      +'<div style="width:42px;height:42px;background:linear-gradient(135deg,var(--pink),var(--purple));border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:18px;flex-shrink:0;">'+parentEmoji+'</div>'
      +'<div style="flex:1;min-width:0;">'
        +'<div style="font-weight:700;font-size:14px;">'+c.nombre+'</div>'
        +'<div style="font-size:11px;color:var(--text2);margin-top:2px;">'+c.parentesco+' · '+c.telefono+' · '+c.ubicacion+'</div>'
        +'<div style="font-size:11px;color:var(--text3);margin-top:2px;">DNI: '+c.dni+'</div>'
        +'<div style="display:flex;gap:5px;margin-top:6px;flex-wrap:wrap;"><span class="tag tag-green" style="font-size:10px;">● Activo</span>'+alertaTags+'</div>'
      +'</div>'
      +'<button onclick="toggleCuidador('+c.id+')" class="btn btn-ghost btn-sm" style="color:var(--red);border-color:var(--red-l);flex-shrink:0;">✕ Quitar</button>'
    +'</div>';
  }).join('');
}

function toggleCuidador(id){
  var c = cuidadores.find(function(x){ return x.id===id; });
  if(c){
    if(confirm('¿Quitar a '+c.nombre+' como cuidador autorizado?')){
      c.activo = false;
      renderCuidadores();
      addCuidAlert('❌ Cuidador removido: '+c.nombre, 'red');
    }
  }
}

function addCuidAlert(msg, type){
  var list = document.getElementById('cuid-alerts-list');
  var colors = {green:'var(--green-l)', red:'var(--red-l)', amber:'var(--amber-l)'};
  var dots   = {green:'var(--green)', red:'var(--red)', amber:'var(--amber)'};
  var now = new Date().toLocaleTimeString('es-PE', {hour:'2-digit',minute:'2-digit'});
  var div = document.createElement('div');
  div.style.cssText='display:flex;gap:10px;align-items:flex-start;padding:8px;background:'+colors[type]+';border-radius:8px;';
  div.innerHTML='<div style="width:8px;height:8px;background:'+dots[type]+';border-radius:50%;margin-top:4px;flex-shrink:0;"></div>'
    +'<div><div style="font-size:13px;font-weight:600;">'+msg+'</div><div style="font-size:11px;color:var(--text2);">Simulado · Hoy '+now+'</div></div>';
  list.prepend(div);
}

function sendTestAlert(){
  addCuidAlert('📨 Alerta de prueba enviada a todos los cuidadores', 'amber');
}
