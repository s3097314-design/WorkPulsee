
// =====================
// CONFIG
// =====================
const firebaseConfig = {
  apiKey: "AIzaSyDb-IwgphxkOAM5_aAhLd1cZEa11w7C4gE",
  authDomain: "workpulse-5b60e.firebaseapp.com",
  projectId: "workpulse-5b60e",
  storageBucket: "workpulse-5b60e.firebasestorage.app",
  messagingSenderId: "1052085420695",
  appId: "1:1052085420695:web:3141bd052ba1ba17e49fd2"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const RETIREMENT_AGE = 62;
const RETIREMENT_WARN_YEARS = 5;
const MAX_FILE_SIZE = 4 * 1024 * 1024;
const POLL_INTERVAL = 12000;
const API = "/api";

// =====================
// TRANSLATIONS
// =====================
const translations = {
  en: {
    nav_employee: "Employee Panel", nav_hr: "HR Dashboard",
    panel_title: "Employee Panel", panel_subtitle: "Your daily workspace — mood, vacation, and more.",
    mood_title: "Daily Mood", mood_desc: "How are you feeling today?",
    mood_sad: "Sad", mood_neutral: "Neutral", mood_happy: "Happy", mood_submit: "Submit Mood",
    vacation_title: "Vacation Request", vacation_desc: "Submit a leave request to HR.",
    vacation_reason_placeholder: "Reason for vacation...", vacation_submit: "Send Request",
    from_label: "From", to_label: "To",
    mission_title: "Mission Request", mission_desc: "Submit a work assignment or business trip request.",
    mission_destination_label: "Destination", mission_destination_placeholder: "City / location",
    mission_reason_placeholder: "Purpose of mission...", mission_submit: "Submit Mission",
    feedback_mission: "Mission request sent!",
    just_title: "Submit Justification", just_desc: "Upload or take a photo of your medical certificate or other proof of absence.",
    just_reason_placeholder: "Reason (illness, appointment, etc.)...",
    just_file_label: "Photo of certificate", just_choose_file: "Choose photo or take one",
    just_submit: "Submit Justification", feedback_just: "Justification submitted!",
    err_just_reason: "Please enter a reason.", err_file_too_big: "File too big (max 4MB).",
    complaint_title: "Anonymous Complaint", complaint_desc: "Submit feedback anonymously. Your identity is never stored.",
    complaint_placeholder: "Write your complaint or suggestion...", complaint_submit: "Submit Anonymously",
    chat_title: "Message HR", chat_placeholder: "Type your message...", chat_send: "Send",
    hr_reply_placeholder: "Reply to employee...", hr_reply_btn: "Reply",
    hr_title: "HR Dashboard", hr_subtitle: "Monitor team wellbeing and incoming requests.",
    burnout_warning: "Burnout Risk Detected! Average mood is critically low. Take action now.",
    stat_avg_mood: "Average Mood", stat_score: "Mood Score",
    stat_vacations: "Vacation Requests", stat_complaints: "Anonymous Reports",
    stat_employees: "Employees", stat_on_vacation: "On Vacation", stat_on_mission: "On Mission",
    stat_pending_requests: "Pending Requests",
    hr_vacation_list: "Vacation Requests", hr_complaints_list: "Anonymous Complaints",
    hr_chat_list: "Employee Messages", hr_mood_log: "Mood Log",
    hr_missions_list: "Mission Requests", hr_just_list: "Absence Justifications",
    hr_directory: "Employee Directory", hr_retirement: "Approaching Retirement",
    clear_all: "Clear All Data", empty: "No data yet.",
    feedback_mood: "Mood submitted! Thank you.", feedback_vacation: "Vacation request sent!",
    feedback_complaint: "Complaint submitted anonymously.",
    err_select_mood: "Please select a mood first.",
    err_fill_fields: "Please fill in all required fields.",
    err_complaint_empty: "Please write something before submitting.",
    login_title: "Welcome Back", login_sub: "Sign in to your account",
    login_id_label: "Email or Phone Number", login_id_placeholder: "Email or phone number",
    login_pass_label: "Password", remember_me: "Remember me", login_btn: "Sign In",
    no_account: "Don't have an account?", go_signup: "Create one",
    signup_title: "Create Account", signup_sub: "Join your team on WorkPulse",
    signup_name_label: "Full Name", signup_id_label: "Email or Phone Number",
    signup_pass_label: "Password", signup_dob_label: "Date of Birth",
    signup_role_label: "Account Type", role_employee: "Employee", role_hr: "HR Manager",
    signup_btn: "Create Account", have_account: "Already have an account?", go_login: "Sign in",
    logout: "Logout",
    company_code_label: "Company Code", company_code_placeholder: "e.g. AB12CD",
    company_name_label: "Company Name",
    mode_join: "Join existing", mode_create: "Create new",
    company_code_hint_join: "Get the code from your HR.",
    company_code_hint_create: "Choose a unique code, e.g. ACME01.",
    err_login_invalid: "Incorrect company code, email/phone, or password.",
    err_signup_exists: "This email/phone is already registered for this company.",
    err_signup_empty: "Please fill in all fields.",
    err_company_not_found: "Company code not found. Ask HR for the right code.",
    err_company_taken: "That company code is already taken.",
    err_pass_short: "Password must be at least 6 characters.",
    err_create_company_hr: "Only HR Managers can create a new company.",
    forgot_password: "Forgot password?", forgot_title: "Reset Password",
    forgot_sub: "Enter your company code, email/phone and a new password.",
    forgot_new_pass_label: "New Password", forgot_btn: "Reset Password",
    back_to_login: "← Back to login",
    err_account_not_found: "No account found with that email/phone in this company.",
    forgot_success: "Password reset! You can now log in with your new password.",
    confirm_title: "Are you sure?", confirm_cancel: "Cancel", confirm_yes: "Yes, confirm",
    confirm_clear_all: "Clear ALL data for ALL employees? This cannot be undone.",
    confirm_delete_my_account: "Delete your account permanently? This cannot be undone.",
    confirm_delete_user: "Delete account for {name}? This cannot be undone.",
    confirm_decline_vacation: "Decline this vacation request?",
    confirm_decline_mission: "Decline this mission request?",
    account_title: "My Account", save_btn: "Save",
    name_label: "Full Name", cur_pass_label: "Current Password", new_pass_label: "New Password",
    change_pass_btn: "Change Password", delete_my_acct: "🗑 Delete My Account",
    manage_users: "Manage Employee Accounts",
    msg_name_updated: "Name updated!", msg_dob_updated: "Date of birth updated!",
    msg_pass_changed: "Password changed!",
    err_name_empty: "Name cannot be empty.",
    err_pass_fields: "Fill in both fields.", err_cur_pass_wrong: "Current password is incorrect.",
    no_employee_accounts: "No employee accounts.", delete_btn: "Delete",
    approve_btn: "Approve", decline_btn: "Decline",
    status_pending: "Pending", status_approved: "Approved", status_declined: "Declined",
    status_working: "Working", status_on_vacation: "On Vacation", status_on_mission: "On Mission",
    view_attachment: "View attachment", no_attachment: "No attachment",
    age_label: "Age", years_unit: "yrs", retires_in: "Retires in {n} yrs", at_retirement_age: "At retirement age",
    no_dob_set: "No date of birth set",
    notif_title: "Notifications", notif_mark_read: "Mark all read", notif_empty: "No notifications.",
    company_share_hint: "Company code (share with your team):",
    vac_ends_today: "Your vacation ends today!",
    vac_ends_in_days: "Your vacation ends in {n} day(s).",
    vac_starts_today: "Your vacation starts today!",
    vac_starts_in_days: "Your vacation starts in {n} day(s).",
    mis_ends_today: "Your mission ends today!",
    mis_ends_in_days: "Your mission ends in {n} day(s).",
    mis_starts_today: "Your mission starts today!",
    mis_starts_in_days: "Your mission starts in {n} day(s)."
  },
  fr: {
    nav_employee: "Espace Employé", nav_hr: "Tableau RH",
    panel_title: "Espace Employé", panel_subtitle: "Votre espace quotidien — humeur, congés, et plus.",
    mood_title: "Humeur du Jour", mood_desc: "Comment vous sentez-vous aujourd'hui ?",
    mood_sad: "Triste", mood_neutral: "Neutre", mood_happy: "Heureux", mood_submit: "Envoyer l'Humeur",
    vacation_title: "Demande de Congé", vacation_desc: "Envoyez une demande de congé aux RH.",
    vacation_reason_placeholder: "Raison du congé...", vacation_submit: "Envoyer la Demande",
    from_label: "Du", to_label: "Au",
    mission_title: "Demande de Mission", mission_desc: "Soumettez une mission de travail ou un voyage d'affaires.",
    mission_destination_label: "Destination", mission_destination_placeholder: "Ville / lieu",
    mission_reason_placeholder: "Objet de la mission...", mission_submit: "Soumettre la Mission",
    feedback_mission: "Demande de mission envoyée !",
    just_title: "Soumettre une Justification", just_desc: "Téléchargez ou prenez en photo votre certificat médical ou un autre justificatif d'absence.",
    just_reason_placeholder: "Raison (maladie, rendez-vous, etc.)...",
    just_file_label: "Photo du certificat", just_choose_file: "Choisir une photo ou en prendre une",
    just_submit: "Soumettre la Justification", feedback_just: "Justification envoyée !",
    err_just_reason: "Veuillez saisir une raison.", err_file_too_big: "Fichier trop volumineux (max 4 Mo).",
    complaint_title: "Plainte Anonyme", complaint_desc: "Soumettez vos commentaires anonymement.",
    complaint_placeholder: "Écrivez votre plainte ou suggestion...", complaint_submit: "Soumettre Anonymement",
    chat_title: "Message aux RH", chat_placeholder: "Tapez votre message...", chat_send: "Envoyer",
    hr_reply_placeholder: "Répondre à l'employé...", hr_reply_btn: "Répondre",
    hr_title: "Tableau de Bord RH", hr_subtitle: "Surveillez le bien-être de l'équipe.",
    burnout_warning: "Risque d'épuisement détecté ! L'humeur moyenne est critique.",
    stat_avg_mood: "Humeur Moyenne", stat_score: "Score d'Humeur",
    stat_vacations: "Demandes de Congé", stat_complaints: "Rapports Anonymes",
    stat_employees: "Employés", stat_on_vacation: "En Congé", stat_on_mission: "En Mission",
    stat_pending_requests: "Demandes en Attente",
    hr_vacation_list: "Demandes de Congé", hr_complaints_list: "Plaintes Anonymes",
    hr_chat_list: "Messages Employés", hr_mood_log: "Journal des Humeurs",
    hr_missions_list: "Demandes de Mission", hr_just_list: "Justificatifs d'Absence",
    hr_directory: "Annuaire des Employés", hr_retirement: "Retraite Imminente",
    clear_all: "Effacer Toutes les Données", empty: "Aucune donnée.",
    feedback_mood: "Humeur enregistrée ! Merci.", feedback_vacation: "Demande de congé envoyée !",
    feedback_complaint: "Plainte soumise anonymement.",
    err_select_mood: "Veuillez sélectionner une humeur.",
    err_fill_fields: "Veuillez remplir tous les champs requis.",
    err_complaint_empty: "Veuillez écrire quelque chose.",
    login_title: "Bon Retour", login_sub: "Connectez-vous à votre compte",
    login_id_label: "Email ou Téléphone", login_id_placeholder: "Email ou téléphone",
    login_pass_label: "Mot de Passe", remember_me: "Se souvenir de moi", login_btn: "Se Connecter",
    no_account: "Pas de compte ?", go_signup: "Créer un compte",
    signup_title: "Créer un Compte", signup_sub: "Rejoignez votre équipe sur WorkPulse",
    signup_name_label: "Nom Complet", signup_id_label: "Email ou Téléphone",
    signup_pass_label: "Mot de Passe", signup_dob_label: "Date de Naissance",
    signup_role_label: "Type de Compte", role_employee: "Employé", role_hr: "Responsable RH",
    signup_btn: "Créer le Compte", have_account: "Déjà un compte ?", go_login: "Se connecter",
    logout: "Déconnexion",
    company_code_label: "Code Entreprise", company_code_placeholder: "ex: AB12CD",
    company_name_label: "Nom de l'Entreprise",
    mode_join: "Rejoindre", mode_create: "Créer",
    company_code_hint_join: "Demandez le code à votre RH.",
    company_code_hint_create: "Choisissez un code unique, ex: ACME01.",
    err_login_invalid: "Code, email/téléphone ou mot de passe incorrect.",
    err_signup_exists: "Cet email/téléphone est déjà enregistré dans cette entreprise.",
    err_signup_empty: "Veuillez remplir tous les champs.",
    err_company_not_found: "Code entreprise introuvable. Demandez le bon code à votre RH.",
    err_company_taken: "Ce code entreprise est déjà pris.",
    err_pass_short: "Le mot de passe doit contenir au moins 6 caractères.",
    err_create_company_hr: "Seuls les Responsables RH peuvent créer une nouvelle entreprise.",
    forgot_password: "Mot de passe oublié ?", forgot_title: "Réinitialiser le mot de passe",
    forgot_sub: "Entrez votre code entreprise, email/téléphone et un nouveau mot de passe.",
    forgot_new_pass_label: "Nouveau Mot de Passe", forgot_btn: "Réinitialiser",
    back_to_login: "← Retour à la connexion",
    err_account_not_found: "Aucun compte trouvé pour cet email/téléphone dans cette entreprise.",
    forgot_success: "Mot de passe réinitialisé ! Vous pouvez maintenant vous connecter.",
    confirm_title: "Êtes-vous sûr ?", confirm_cancel: "Annuler", confirm_yes: "Oui, confirmer",
    confirm_clear_all: "Effacer TOUTES les données de TOUS les employés ? Action irréversible.",
    confirm_delete_my_account: "Supprimer définitivement votre compte ? Action irréversible.",
    confirm_delete_user: "Supprimer le compte de {name} ? Action irréversible.",
    confirm_decline_vacation: "Refuser cette demande de congé ?",
    confirm_decline_mission: "Refuser cette demande de mission ?",
    account_title: "Mon Compte", save_btn: "Enregistrer",
    name_label: "Nom Complet", cur_pass_label: "Mot de Passe Actuel", new_pass_label: "Nouveau Mot de Passe",
    change_pass_btn: "Changer le Mot de Passe", delete_my_acct: "🗑 Supprimer Mon Compte",
    manage_users: "Gérer les Comptes Employés",
    msg_name_updated: "Nom mis à jour !", msg_dob_updated: "Date de naissance mise à jour !",
    msg_pass_changed: "Mot de passe modifié !",
    err_name_empty: "Le nom ne peut pas être vide.",
    err_pass_fields: "Remplissez les deux champs.", err_cur_pass_wrong: "Mot de passe actuel incorrect.",
    no_employee_accounts: "Aucun compte employé.", delete_btn: "Supprimer",
    approve_btn: "Approuver", decline_btn: "Refuser",
    status_pending: "En Attente", status_approved: "Approuvée", status_declined: "Refusée",
    status_working: "Au Travail", status_on_vacation: "En Congé", status_on_mission: "En Mission",
    view_attachment: "Voir la pièce jointe", no_attachment: "Aucune pièce jointe",
    age_label: "Âge", years_unit: "ans", retires_in: "Retraite dans {n} ans", at_retirement_age: "Âge de retraite atteint",
    no_dob_set: "Date de naissance non définie",
    notif_title: "Notifications", notif_mark_read: "Tout marquer comme lu", notif_empty: "Aucune notification.",
    company_share_hint: "Code entreprise (à partager avec votre équipe) :",
    vac_ends_today: "Votre congé se termine aujourd'hui !",
    vac_ends_in_days: "Votre congé se termine dans {n} jour(s).",
    vac_starts_today: "Votre congé commence aujourd'hui !",
    vac_starts_in_days: "Votre congé commence dans {n} jour(s).",
    mis_ends_today: "Votre mission se termine aujourd'hui !",
    mis_ends_in_days: "Votre mission se termine dans {n} jour(s).",
    mis_starts_today: "Votre mission commence aujourd'hui !",
    mis_starts_in_days: "Votre mission commence dans {n} jour(s)."
  },
  ar: {
    nav_employee: "لوحة الموظف", nav_hr: "لوحة الموارد البشرية",
    panel_title: "لوحة الموظف", panel_subtitle: "مساحتك اليومية — المزاج، الإجازات، والمزيد.",
    mood_title: "مزاج اليوم", mood_desc: "كيف حالك اليوم؟",
    mood_sad: "حزين", mood_neutral: "محايد", mood_happy: "سعيد", mood_submit: "إرسال المزاج",
    vacation_title: "طلب إجازة", vacation_desc: "أرسل طلب إجازة إلى الموارد البشرية.",
    vacation_reason_placeholder: "سبب الإجازة...", vacation_submit: "إرسال الطلب",
    from_label: "من", to_label: "إلى",
    mission_title: "طلب مهمة", mission_desc: "أرسل طلب مهمة عمل أو سفر مهني.",
    mission_destination_label: "الوجهة", mission_destination_placeholder: "المدينة / الموقع",
    mission_reason_placeholder: "الغرض من المهمة...", mission_submit: "إرسال المهمة",
    feedback_mission: "تم إرسال طلب المهمة!",
    just_title: "إرسال مبرر", just_desc: "حمّل أو التقط صورة لشهادتك الطبية أو أي مبرر آخر للغياب.",
    just_reason_placeholder: "السبب (مرض، موعد، إلخ)...",
    just_file_label: "صورة الشهادة", just_choose_file: "اختر صورة أو التقط واحدة",
    just_submit: "إرسال المبرر", feedback_just: "تم إرسال المبرر!",
    err_just_reason: "الرجاء إدخال سبب.", err_file_too_big: "الملف كبير جداً (الحد الأقصى 4 ميغابايت).",
    complaint_title: "شكوى مجهولة", complaint_desc: "أرسل ملاحظاتك بشكل مجهول.",
    complaint_placeholder: "اكتب شكواك أو اقتراحك...", complaint_submit: "إرسال بشكل مجهول",
    chat_title: "مراسلة الموارد البشرية", chat_placeholder: "اكتب رسالتك...", chat_send: "إرسال",
    hr_reply_placeholder: "الرد على الموظف...", hr_reply_btn: "رد",
    hr_title: "لوحة الموارد البشرية", hr_subtitle: "راقب رفاهية الفريق والطلبات الواردة.",
    burnout_warning: "تحذير: خطر الإرهاق! متوسط المزاج منخفض جداً.",
    stat_avg_mood: "متوسط المزاج", stat_score: "درجة المزاج",
    stat_vacations: "طلبات الإجازة", stat_complaints: "التقارير المجهولة",
    stat_employees: "الموظفون", stat_on_vacation: "في إجازة", stat_on_mission: "في مهمة",
    stat_pending_requests: "طلبات قيد الانتظار",
    hr_vacation_list: "طلبات الإجازة", hr_complaints_list: "الشكاوى المجهولة",
    hr_chat_list: "رسائل الموظفين", hr_mood_log: "سجل المزاج",
    hr_missions_list: "طلبات المهام", hr_just_list: "مبررات الغياب",
    hr_directory: "دليل الموظفين", hr_retirement: "قرب التقاعد",
    clear_all: "مسح جميع البيانات", empty: "لا توجد بيانات بعد.",
    feedback_mood: "تم إرسال مزاجك! شكراً.", feedback_vacation: "تم إرسال طلب الإجازة!",
    feedback_complaint: "تم إرسال الشكوى بشكل مجهول.",
    err_select_mood: "الرجاء اختيار مزاج أولاً.",
    err_fill_fields: "الرجاء ملء جميع الحقول المطلوبة.",
    err_complaint_empty: "الرجاء كتابة شيء قبل الإرسال.",
    login_title: "مرحباً بعودتك", login_sub: "سجّل الدخول إلى حسابك",
    login_id_label: "البريد الإلكتروني أو رقم الهاتف", login_id_placeholder: "البريد أو الهاتف",
    login_pass_label: "كلمة المرور", remember_me: "تذكرني", login_btn: "تسجيل الدخول",
    no_account: "ليس لديك حساب؟", go_signup: "أنشئ حساباً",
    signup_title: "إنشاء حساب", signup_sub: "انضم إلى فريقك على WorkPulse",
    signup_name_label: "الاسم الكامل", signup_id_label: "البريد الإلكتروني أو الهاتف",
    signup_pass_label: "كلمة المرور", signup_dob_label: "تاريخ الميلاد",
    signup_role_label: "نوع الحساب", role_employee: "موظف", role_hr: "مدير الموارد البشرية",
    signup_btn: "إنشاء الحساب", have_account: "لديك حساب؟", go_login: "سجّل الدخول",
    logout: "تسجيل الخروج",
    company_code_label: "رمز الشركة", company_code_placeholder: "مثال: AB12CD",
    company_name_label: "اسم الشركة",
    mode_join: "الانضمام", mode_create: "إنشاء جديد",
    company_code_hint_join: "احصل على الرمز من قسم الموارد البشرية.",
    company_code_hint_create: "اختر رمزاً فريداً، مثل: ACME01.",
    err_login_invalid: "الرمز أو البريد/الهاتف أو كلمة المرور غير صحيحة.",
    err_signup_exists: "هذا البريد/الهاتف مسجّل مسبقاً في هذه الشركة.",
    err_signup_empty: "الرجاء ملء جميع الحقول.",
    err_company_not_found: "رمز الشركة غير موجود. اطلب الرمز الصحيح من الموارد البشرية.",
    err_company_taken: "هذا الرمز مستخدم بالفعل.",
    err_pass_short: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
    err_create_company_hr: "فقط مدراء الموارد البشرية يمكنهم إنشاء شركة جديدة.",
    forgot_password: "نسيت كلمة المرور؟", forgot_title: "إعادة تعيين كلمة المرور",
    forgot_sub: "أدخل رمز الشركة وبريدك/هاتفك وكلمة مرور جديدة.",
    forgot_new_pass_label: "كلمة المرور الجديدة", forgot_btn: "إعادة التعيين",
    back_to_login: "← العودة إلى تسجيل الدخول",
    err_account_not_found: "لا يوجد حساب بهذا البريد/الهاتف في هذه الشركة.",
    forgot_success: "تم إعادة تعيين كلمة المرور! يمكنك الآن تسجيل الدخول.",
    confirm_title: "هل أنت متأكد؟", confirm_cancel: "إلغاء", confirm_yes: "نعم، تأكيد",
    confirm_clear_all: "مسح جميع بيانات جميع الموظفين؟ لا يمكن التراجع.",
    confirm_delete_my_account: "حذف حسابك نهائياً؟ لا يمكن التراجع.",
    confirm_delete_user: "حذف حساب {name}؟ لا يمكن التراجع.",
    confirm_decline_vacation: "رفض طلب الإجازة هذا؟",
    confirm_decline_mission: "رفض طلب المهمة هذا؟",
    account_title: "حسابي", save_btn: "حفظ",
    name_label: "الاسم الكامل", cur_pass_label: "كلمة المرور الحالية", new_pass_label: "كلمة المرور الجديدة",
    change_pass_btn: "تغيير كلمة المرور", delete_my_acct: "🗑 حذف حسابي",
    manage_users: "إدارة حسابات الموظفين",
    msg_name_updated: "تم تحديث الاسم!", msg_dob_updated: "تم تحديث تاريخ الميلاد!",
    msg_pass_changed: "تم تغيير كلمة المرور!",
    err_name_empty: "لا يمكن أن يكون الاسم فارغاً.",
    err_pass_fields: "املأ كلا الحقلين.", err_cur_pass_wrong: "كلمة المرور الحالية غير صحيحة.",
    no_employee_accounts: "لا توجد حسابات موظفين.", delete_btn: "حذف",
    approve_btn: "موافقة", decline_btn: "رفض",
    status_pending: "قيد الانتظار", status_approved: "تمت الموافقة", status_declined: "مرفوضة",
    status_working: "يعمل", status_on_vacation: "في إجازة", status_on_mission: "في مهمة",
    view_attachment: "عرض المرفق", no_attachment: "لا يوجد مرفق",
    age_label: "العمر", years_unit: "سنة", retires_in: "يتقاعد خلال {n} سنوات", at_retirement_age: "بلغ سن التقاعد",
    no_dob_set: "تاريخ الميلاد غير محدد",
    notif_title: "الإشعارات", notif_mark_read: "تحديد الكل كمقروء", notif_empty: "لا توجد إشعارات.",
    company_share_hint: "رمز الشركة (شاركه مع فريقك):",
    vac_ends_today: "تنتهي إجازتك اليوم!",
    vac_ends_in_days: "تنتهي إجازتك خلال {n} يوم/أيام.",
    vac_starts_today: "تبدأ إجازتك اليوم!",
    vac_starts_in_days: "تبدأ إجازتك خلال {n} يوم/أيام.",
    mis_ends_today: "تنتهي مهمتك اليوم!",
    mis_ends_in_days: "تنتهي مهمتك خلال {n} يوم/أيام.",
    mis_starts_today: "تبدأ مهمتك اليوم!",
    mis_starts_in_days: "تبدأ مهمتك خلال {n} يوم/أيام."
  }
};

// =====================
// STATE
// =====================
let currentLang = "en";
let selectedMood = null;
let me = null;
let company = null;
let signupMode = "join";
let activeHrThread = null;
let pendingJustFile = null;
let stateCache = null;
let pollTimer = null;
let notifs = [];
const MOOD_SCORES = { sad: 1, neutral: 2, happy: 3 };
const MOOD_EMOJIS = { sad: "😢", neutral: "😐", happy: "😄" };

// =====================
// API HELPER
// =====================
async function api(path, opts = {}) {
  const init = {
    method: opts.method || "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) }
  };
  if (opts.body !== undefined) init.body = JSON.stringify(opts.body);
  let resp;
  try { resp = await fetch(API + path, init); }
 catch (e) {
  console.log("SIGNUP ERROR:", e);
  showAuthError("signup-error", e.message || e);
}
  let data = null;
  try { data = await resp.json(); } catch {}
  if (!resp.ok) throw { status: resp.status, ...(data || {}) };
  return data;
}

// =====================
// THEME
// =====================
function toggleTheme() {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("wp_theme", next);
  updateThemeIcons(next);
}
function updateThemeIcons(theme) {
  document.querySelectorAll(".theme-toggle").forEach(btn => btn.textContent = theme === "dark" ? "☀️" : "🌙");
}
function loadTheme() {
  const saved = localStorage.getItem("wp_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcons(saved);
}

// =====================
// LANGUAGE
// =====================
function t(key, params) {
  let str = (translations[currentLang] && translations[currentLang][key]) || key;
  if (params) Object.keys(params).forEach(k => { str = str.replace("{" + k + "}", params[k]); });
  return str;
}
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("wp_lang", lang);
  const isRTL = lang === "ar";
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key] !== undefined) el.placeholder = translations[lang][key];
  });
  if (me && !document.getElementById("app").classList.contains("hidden")) {
    renderAll();
  }
  updateCompanyCodeHint();
}

function updateCompanyCodeHint() {
  const hint = document.getElementById("company-code-hint");
  if (hint) hint.textContent = signupMode === "create" ? t("company_code_hint_create") : t("company_code_hint_join");
}

// =====================
// AUTH PANELS
// =====================
function showAuthPanel(panel) {
  document.getElementById("login-panel").classList.toggle("hidden", panel !== "login");
  document.getElementById("signup-panel").classList.toggle("hidden", panel !== "signup");
  document.getElementById("forgot-panel").classList.toggle("hidden", panel !== "forgot");
  ["login-error", "signup-error", "forgot-error"].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = ""; el.classList.add("hidden"); }
  });
}
function setSignupMode(mode) {
  signupMode = mode;
  document.getElementById("mode-join").classList.toggle("active", mode === "join");
  document.getElementById("mode-create").classList.toggle("active", mode === "create");
  document.getElementById("company-name-group").style.display = mode === "create" ? "" : "none";
  if (mode === "create") {
    document.getElementById("signup-role").value = "hr";
  }
  updateCompanyCodeHint();
}

function showAuthError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.remove("hidden"); }
}
function toggleEye(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === "password") { input.type = "text"; btn.textContent = "🙈"; }
  else { input.type = "password"; btn.textContent = "👁"; }
}

function mapAuthError(err) {
  const code = err && err.error;
  switch (code) {
    case "invalid_credentials": return t("err_login_invalid");
    case "account_exists": return t("err_signup_exists");
    case "company_not_found": return t("err_company_not_found");
    case "missing_company": return t("err_signup_empty");
    case "missing_fields": return t("err_signup_empty");
    case "weak_password": return t("err_pass_short");
    case "account_not_found": return t("err_account_not_found");
    case "wrong_password": return t("err_cur_pass_wrong");
    case "file_too_large": return t("err_file_too_big");
    default: return code || (err && err.message) || "Error";
  }
}

// =====================
// LOGIN / SIGNUP / SESSION
// =====================
async function handleLogin() {
  const email = document.getElementById("login-id").value.trim();
  const password = document.getElementById("login-pass").value;

  try {
    await window.signInWithEmailAndPassword(window.auth, email, password);
    launchApp();
  } catch (e) {
    alert(e.message);
  }
}
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


// =====================
// SIGNUP FUNCTION
// =====================
async function handleSignup() {

  const role = document.getElementById("signup-role").value;
  const name = document.getElementById("signup-name").value.trim();
  const identifier = document.getElementById("signup-id").value.trim();
  const password = document.getElementById("signup-pass").value;
  const companyCode = document.getElementById("signup-code").value.trim();

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(identifier, password);

    alert("Signup success!");

    // continue your app login logic
    onAuthSuccess({
      account: {
        name,
        identifier,
        role
      },
      company: {
        code: companyCode
      }
    });

  } catch (error) {
    console.error(error);
    showAuthError("signup-error", error.message);
  }
}
async function handleForgotPassword() {
  const companyCode = document.getElementById("forgot-code").value.trim();
  const identifier = document.getElementById("forgot-id").value.trim().toLowerCase();
  const newPassword = document.getElementById("forgot-pass").value;
  if (!companyCode || !identifier || !newPassword) { showAuthError("forgot-error", t("err_signup_empty")); return; }
  if (newPassword.length < 6) { showAuthError("forgot-error", t("err_pass_short")); return; }
  try {
    await api("/auth/forgot", { method: "POST", body: { companyCode, identifier, newPassword } });
    document.getElementById("forgot-id").value = "";
    document.getElementById("forgot-pass").value = "";
    document.getElementById("forgot-pass").type = "password";
    showAuthPanel("login");
    document.getElementById("login-code").value = companyCode;
    document.getElementById("login-id").value = identifier;
    alert(t("forgot_success"));
  } catch (e) {
    showAuthError("forgot-error", mapAuthError(e));
  }
}

function onAuthSuccess(r) {
  me = r.account;
  company = r.company;
  launchApp();
}

async function handleLogout() {
  try { await api("/auth/logout", { method: "POST" }); } catch {}
  me = null; company = null; selectedMood = null; activeHrThread = null;
  if (pollTimer) { clearInterval(pollTimer); pollTimer = null; }
  document.getElementById("app").classList.add("hidden");
  document.getElementById("auth-screen").classList.remove("hidden");
  showAuthPanel("login");
  ["login-id", "login-pass", "login-code"].forEach(id => { document.getElementById(id).value = ""; });
  document.getElementById("login-pass").type = "password";
}

// =====================
// LAUNCH APP
// =====================
function launchApp() {
  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  const initials = me.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
  document.getElementById("user-avatar").textContent = initials;
  document.getElementById("user-name-display").textContent = me.name;
  document.getElementById("company-pill").textContent = company.name + " · " + company.code;

  if (me.role === "hr") {
    document.getElementById("btn-hr").classList.remove("hidden");
    document.getElementById("btn-employee").classList.add("hidden");
    showSection("hr");
  } else {
    document.getElementById("btn-hr").classList.add("hidden");
    document.getElementById("btn-employee").classList.remove("hidden");
    showSection("employee");
  }

  refreshAll();
  if (pollTimer) clearInterval(pollTimer);
  pollTimer = setInterval(refreshAll, POLL_INTERVAL);
}

async function refreshAll() {
  try {
    stateCache = await api("/state");
    const n = await api("/notifications");
    notifs = n.notifications || [];
    renderAll();
  } catch (e) {
    if (e && e.status === 401) {
      handleLogout();
    }
  }
}

function renderAll() {
  if (!stateCache || !me) return;
  renderNotifs();
  if (me.role === "hr") refreshDashboard();
  else {
    renderEmployeeChat();
    renderActiveStatusBanner();
    renderMyVacationsAndMissions();
  }
}

// =====================
// NAVIGATION
// =====================
function showSection(name) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("section-" + name).classList.add("active");
  const btn = document.getElementById("btn-" + name);
  if (btn) btn.classList.add("active");
}

// =====================
// MOOD
// =====================
function selectMood(mood) {
  selectedMood = mood;
  document.querySelectorAll(".mood-btn").forEach(btn => {
    btn.classList.toggle("selected", btn.getAttribute("data-mood") === mood);
  });
}
async function submitMood() {
  if (!selectedMood) { showFeedback("mood-feedback", t("err_select_mood"), "error"); return; }
  try {
    await api("/moods", { method: "POST", body: { mood: selectedMood } });
    showFeedback("mood-feedback", t("feedback_mood"), "success");
    selectedMood = null;
    document.querySelectorAll(".mood-btn").forEach(btn => btn.classList.remove("selected"));
    refreshAll();
  } catch (e) { showFeedback("mood-feedback", mapAuthError(e), "error"); }
}

// =====================
// VACATION
// =====================
async function submitVacation() {
  const from = document.getElementById("vacation-from").value;
  const to = document.getElementById("vacation-to").value;
  const reason = document.getElementById("vacation-reason").value.trim();
  if (!from || !to || !reason) { showFeedback("vacation-feedback", t("err_fill_fields"), "error"); return; }
  try {
    await api("/vacations", { method: "POST", body: { from, to, reason } });
    document.getElementById("vacation-from").value = "";
    document.getElementById("vacation-to").value = "";
    document.getElementById("vacation-reason").value = "";
    showFeedback("vacation-feedback", t("feedback_vacation"), "success");
    refreshAll();
  } catch (e) { showFeedback("vacation-feedback", mapAuthError(e), "error"); }
}

async function setVacationStatus(reqId, status) {
  try { await api("/vacations/" + reqId + "/status", { method: "PUT", body: { status } }); refreshAll(); }
  catch (e) { alert(mapAuthError(e)); }
}
function approveVacation(id) { setVacationStatus(id, "approved"); }
function declineVacation(id) {
  showConfirm(t("confirm_decline_vacation"), () => setVacationStatus(id, "declined"));
}

// =====================
// MISSION
// =====================
async function submitMission() {
  const destination = document.getElementById("mission-destination").value.trim();
  const from = document.getElementById("mission-from").value;
  const to = document.getElementById("mission-to").value;
  const reason = document.getElementById("mission-reason").value.trim();
  if (!destination || !from || !to || !reason) { showFeedback("mission-feedback", t("err_fill_fields"), "error"); return; }
  try {
    await api("/missions", { method: "POST", body: { destination, from, to, reason } });
    document.getElementById("mission-destination").value = "";
    document.getElementById("mission-from").value = "";
    document.getElementById("mission-to").value = "";
    document.getElementById("mission-reason").value = "";
    showFeedback("mission-feedback", t("feedback_mission"), "success");
    refreshAll();
  } catch (e) { showFeedback("mission-feedback", mapAuthError(e), "error"); }
}
async function setMissionStatus(reqId, status) {
  try { await api("/missions/" + reqId + "/status", { method: "PUT", body: { status } }); refreshAll(); }
  catch (e) { alert(mapAuthError(e)); }
}
function approveMission(id) { setMissionStatus(id, "approved"); }
function declineMission(id) {
  showConfirm(t("confirm_decline_mission"), () => setMissionStatus(id, "declined"));
}

// =====================
// JUSTIFICATION
// =====================
function onJustFilePick(event) {
  const file = event.target.files[0];
  const nameEl = document.getElementById("just-file-name");
  const previewEl = document.getElementById("just-preview");
  pendingJustFile = null;
  if (!file) { nameEl.textContent = t("just_choose_file"); previewEl.classList.add("hidden"); return; }
  if (file.size > MAX_FILE_SIZE) {
    showFeedback("just-feedback", t("err_file_too_big"), "error");
    event.target.value = ""; nameEl.textContent = t("just_choose_file"); previewEl.classList.add("hidden");
    return;
  }
  nameEl.textContent = file.name;
  const reader = new FileReader();
  reader.onload = e => { pendingJustFile = e.target.result; previewEl.src = e.target.result; previewEl.classList.remove("hidden"); };
  reader.readAsDataURL(file);
}

async function submitJustification() {
  const reason = document.getElementById("just-reason").value.trim();
  if (!reason) { showFeedback("just-feedback", t("err_just_reason"), "error"); return; }
  try {
    await api("/justifications", { method: "POST", body: { reason, file: pendingJustFile } });
    document.getElementById("just-reason").value = "";
    document.getElementById("just-file").value = "";
    document.getElementById("just-file-name").textContent = t("just_choose_file");
    document.getElementById("just-preview").classList.add("hidden");
    pendingJustFile = null;
    showFeedback("just-feedback", t("feedback_just"), "success");
    refreshAll();
  } catch (e) { showFeedback("just-feedback", mapAuthError(e), "error"); }
}

// =====================
// COMPLAINT
// =====================
async function submitComplaint() {
  const text = document.getElementById("complaint-text").value.trim();
  if (!text) { showFeedback("complaint-feedback", t("err_complaint_empty"), "error"); return; }
  try {
    await api("/complaints", { method: "POST", body: { text } });
    document.getElementById("complaint-text").value = "";
    showFeedback("complaint-feedback", t("feedback_complaint"), "success");
  } catch (e) { showFeedback("complaint-feedback", mapAuthError(e), "error"); }
}

// =====================
// EMPLOYEE CHAT
// =====================
async function sendChat() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (!msg) return;
  try {
    await api("/chats", { method: "POST", body: { msg } });
    input.value = "";
    refreshAll();
  } catch (e) { alert(mapAuthError(e)); }
}

function renderEmployeeChat() {
  if (!stateCache) return;
  renderChatMessages("chat-display", stateCache.chats);
}

// =====================
// HR CHAT THREADS
// =====================
function initHrChatThreads() {
  const tabsEl = document.getElementById("hr-employee-tabs");
  const chatBox = document.getElementById("hr-chat-display");
  const replyRow = document.getElementById("hr-reply-row");
  if (!stateCache) return;

  const seen = {};
  const threads = [];
  stateCache.chats.forEach(c => {
    if (!seen[c.accountId]) {
      seen[c.accountId] = true;
      const acct = stateCache.accounts.find(a => a.id === c.accountId);
      threads.push({ accountId: c.accountId, name: acct ? acct.name : ("#" + c.accountId) });
    }
  });

  if (threads.length === 0) {
    tabsEl.innerHTML = '<p class="empty-msg">' + escapeHtml(t("empty")) + "</p>";
    chatBox.innerHTML = "";
    replyRow.classList.add("hidden");
    return;
  }
  tabsEl.innerHTML = "";
  threads.forEach(th => {
    const btn = document.createElement("button");
    btn.className = "emp-tab" + (activeHrThread && activeHrThread.accountId === th.accountId ? " active" : "");
    btn.textContent = th.name;
    btn.onclick = () => selectHrThread(th.accountId, th.name);
    tabsEl.appendChild(btn);
  });

  if (activeHrThread) {
    renderHrThread(activeHrThread.accountId);
    replyRow.classList.remove("hidden");
  } else {
    chatBox.innerHTML = '<p class="empty-msg" style="padding:20px 0;text-align:center">← ' + escapeHtml(t("empty")) + "</p>";
    replyRow.classList.add("hidden");
  }
}

function selectHrThread(accountId, name) { activeHrThread = { accountId, name }; initHrChatThreads(); }

function renderHrThread(accountId) {
  const visible = stateCache.chats.filter(c => c.accountId === accountId);
  renderChatMessages("hr-chat-display", visible);
}

async function sendHrReply() {
  if (!activeHrThread) return;
  const input = document.getElementById("hr-reply-input");
  const msg = input.value.trim();
  if (!msg) return;
  try {
    await api("/chats", { method: "POST", body: { msg, toAccountId: activeHrThread.accountId } });
    input.value = "";
    refreshAll();
  } catch (e) { alert(mapAuthError(e)); }
}

function renderChatMessages(containerId, msgs) {
  const box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = "";
  if (!msgs || msgs.length === 0) { box.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  msgs.forEach(m => {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble" + (m.fromHr ? " hr-reply" : "");
    const nameHtml = m.senderName ? '<div class="bubble-name">' + escapeHtml(m.senderName) + "</div>" : "";
    const time = new Date(m.createdAt).toLocaleString();
    bubble.innerHTML = nameHtml + "<span>" + escapeHtml(m.msg) + '</span><div class="meta">' + time + "</div>";
    box.appendChild(bubble);
  });
  box.scrollTop = box.scrollHeight;
}

// =====================
// AGE / STATUS HELPERS
// =====================
function calcAge(dob) {
  if (!dob) return null;
  const today = new Date();
  const birth = new Date(dob);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

function dayDiff(a, b) {
  const ms = new Date(a).setHours(0,0,0,0) - new Date(b).setHours(0,0,0,0);
  return Math.round(ms / 86400000);
}

function getAccountStatus(accountId) {
  const today = new Date();
  if (stateCache.vacations.some(v => v.accountId === accountId && v.status === "approved" && dayDiff(today, v.fromDate) >= 0 && dayDiff(today, v.toDate) <= 0)) return "on_vacation";
  if (stateCache.missions.some(m => m.accountId === accountId && m.status === "approved" && dayDiff(today, m.fromDate) >= 0 && dayDiff(today, m.toDate) <= 0)) return "on_mission";
  return "working";
}

function statusLabel(s) { return s === "on_vacation" ? t("status_on_vacation") : s === "on_mission" ? t("status_on_mission") : t("status_working"); }
function statusClass(s) { return s === "on_vacation" ? "status-vacation" : s === "on_mission" ? "status-mission" : "status-working"; }

// =====================
// EMPLOYEE — STATUS BANNER + MY REQUESTS
// =====================
function renderActiveStatusBanner() {
  const el = document.getElementById("active-status-banner");
  if (!stateCache) { el.classList.add("hidden"); return; }
  const today = new Date();
  const messages = [];

  const myV = stateCache.vacations.filter(v => v.accountId === me.id && v.status === "approved");
  myV.forEach(v => {
    const dStart = dayDiff(v.fromDate, today);
    const dEnd = dayDiff(v.toDate, today);
    if (dStart > 0 && dStart <= 14) {
      messages.push({ kind: "vacation-soon", text: dStart === 1 ? t("vac_starts_in_days", { n: 1 }) : t("vac_starts_in_days", { n: dStart }) });
    } else if (dStart === 0 && dEnd >= 0) {
      messages.push({ kind: "vacation-active", text: t("vac_starts_today") });
    } else if (dStart < 0 && dEnd >= 0) {
      if (dEnd === 0) messages.push({ kind: "vacation-active", text: t("vac_ends_today") });
      else messages.push({ kind: "vacation-active", text: t("vac_ends_in_days", { n: dEnd }) });
    }
  });

  const myM = stateCache.missions.filter(m => m.accountId === me.id && m.status === "approved");
  myM.forEach(m => {
    const dStart = dayDiff(m.fromDate, today);
    const dEnd = dayDiff(m.toDate, today);
    if (dStart > 0 && dStart <= 14) {
      messages.push({ kind: "mission-soon", text: dStart === 1 ? t("mis_starts_in_days", { n: 1 }) : t("mis_starts_in_days", { n: dStart }) });
    } else if (dStart === 0 && dEnd >= 0) {
      messages.push({ kind: "mission-active", text: t("mis_starts_today") });
    } else if (dStart < 0 && dEnd >= 0) {
      if (dEnd === 0) messages.push({ kind: "mission-active", text: t("mis_ends_today") });
      else messages.push({ kind: "mission-active", text: t("mis_ends_in_days", { n: dEnd }) });
    }
  });

  if (messages.length === 0) { el.classList.add("hidden"); return; }
  el.classList.remove("hidden");
  el.innerHTML = messages.map(m => {
    const icon = m.kind.startsWith("vacation") ? "✈️" : "📍";
    return '<div class="banner-line ' + m.kind + '"><span class="banner-icon">' + icon + '</span>' + escapeHtml(m.text) + '</div>';
  }).join("");
}

function renderMyVacationsAndMissions() {
  const vEl = document.getElementById("my-vacations");
  const mEl = document.getElementById("my-missions");
  if (!stateCache) return;
  const myV = stateCache.vacations.filter(v => v.accountId === me.id);
  const myM = stateCache.missions.filter(m => m.accountId === me.id);
  vEl.innerHTML = myV.length === 0 ? "" : myV.slice(0, 4).map(v =>
    '<div class="mini-row"><span>' + escapeHtml(v.fromDate) + ' → ' + escapeHtml(v.toDate) + '</span><span class="status-badge status-' + v.status + '">' + escapeHtml(t("status_" + v.status)) + '</span></div>'
  ).join("");
  mEl.innerHTML = myM.length === 0 ? "" : myM.slice(0, 4).map(m =>
    '<div class="mini-row"><span>📍 ' + escapeHtml(m.destination) + '</span><span class="status-badge status-' + m.status + '">' + escapeHtml(t("status_" + m.status)) + '</span></div>'
  ).join("");
}

// =====================
// HR DASHBOARD
// =====================
function refreshDashboard() {
  if (!stateCache) return;
  const employees = stateCache.accounts.filter(a => a.role !== "hr");

  document.getElementById("stat-employees").textContent = employees.length;
  document.getElementById("stat-on-vacation").textContent = employees.filter(e => getAccountStatus(e.id) === "on_vacation").length;
  document.getElementById("stat-on-mission").textContent = employees.filter(e => getAccountStatus(e.id) === "on_mission").length;
  document.getElementById("stat-vacations").textContent = stateCache.vacations.filter(v => v.status === "pending").length + stateCache.missions.filter(m => m.status === "pending").length;
  document.getElementById("stat-complaints").textContent = stateCache.complaints.length;

  if (stateCache.moods.length === 0) {
    document.getElementById("stat-avg-mood").textContent = "—";
    document.getElementById("burnout-alert").classList.add("hidden");
  } else {
    const avg = stateCache.moods.reduce((s, m) => s + m.score, 0) / stateCache.moods.length;
    document.getElementById("stat-avg-mood").textContent = avg < 1.5 ? "😢" : avg < 2.5 ? "😐" : "😄";
    document.getElementById("burnout-alert").classList.toggle("hidden", avg >= 1.8);
  }

  const strip = document.getElementById("company-info-strip");
  strip.innerHTML = '<span class="strip-label">' + escapeHtml(t("company_share_hint")) + '</span> <span class="strip-code">' + escapeHtml(company.code) + '</span>';

  renderHRVacations();
  renderHRMissions();
  renderHRJustifications();
  renderDirectory(employees);
  renderRetirement(employees);

  renderList("hr-complaints", stateCache.complaints, c =>
    "<span>" + escapeHtml(c.text) + '</span><div class="list-meta">' + new Date(c.createdAt).toLocaleString() + "</div>"
  );
  renderList("hr-mood-log", stateCache.moods, m => {
    const acct = stateCache.accounts.find(a => a.id === m.accountId);
    const nm = acct ? acct.name : "Employee";
    return "<strong>" + MOOD_EMOJIS[m.mood] + " " + escapeHtml(nm) + "</strong>" +
      '<span style="margin-left:6px;color:var(--text-muted);font-size:12px">' + escapeHtml(m.mood) + "</span>" +
      '<div class="list-meta">' + new Date(m.createdAt).toLocaleString() + "</div>";
  });

  initHrChatThreads();
}

function renderHRVacations() {
  const el = document.getElementById("hr-vacations");
  const list = stateCache.vacations;
  if (list.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  list.forEach(v => {
    const acct = stateCache.accounts.find(a => a.id === v.accountId);
    const name = acct ? acct.name : "#" + v.accountId;
    let actionsHtml = "";
    if (v.status === "pending") {
      actionsHtml = '<div class="action-row">' +
        '<button class="btn-mini btn-approve" onclick="approveVacation(' + v.id + ')">✓ ' + escapeHtml(t("approve_btn")) + '</button>' +
        '<button class="btn-mini btn-decline" onclick="declineVacation(' + v.id + ')">✗ ' + escapeHtml(t("decline_btn")) + '</button>' +
      '</div>';
    }
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML =
      '<div class="list-row-top"><strong>' + escapeHtml(name) + '</strong><span class="status-badge status-' + v.status + '">' + escapeHtml(t("status_" + v.status)) + '</span></div>' +
      '<div class="list-meta">' + escapeHtml(v.fromDate) + " → " + escapeHtml(v.toDate) + '</div>' +
      '<div class="list-meta">' + escapeHtml(v.reason) + '</div>' +
      '<div class="list-meta">' + new Date(v.createdAt).toLocaleString() + '</div>' + actionsHtml;
    el.appendChild(div);
  });
}

function renderHRMissions() {
  const el = document.getElementById("hr-missions");
  const list = stateCache.missions;
  if (list.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  list.forEach(m => {
    const acct = stateCache.accounts.find(a => a.id === m.accountId);
    const name = acct ? acct.name : "#" + m.accountId;
    let actionsHtml = "";
    if (m.status === "pending") {
      actionsHtml = '<div class="action-row">' +
        '<button class="btn-mini btn-approve" onclick="approveMission(' + m.id + ')">✓ ' + escapeHtml(t("approve_btn")) + '</button>' +
        '<button class="btn-mini btn-decline" onclick="declineMission(' + m.id + ')">✗ ' + escapeHtml(t("decline_btn")) + '</button>' +
      '</div>';
    }
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML =
      '<div class="list-row-top"><strong>' + escapeHtml(name) + '</strong><span class="status-badge status-' + m.status + '">' + escapeHtml(t("status_" + m.status)) + '</span></div>' +
      '<div class="list-meta">📍 ' + escapeHtml(m.destination) + '</div>' +
      '<div class="list-meta">' + escapeHtml(m.fromDate) + " → " + escapeHtml(m.toDate) + '</div>' +
      '<div class="list-meta">' + escapeHtml(m.reason) + '</div>' +
      '<div class="list-meta">' + new Date(m.createdAt).toLocaleString() + '</div>' + actionsHtml;
    el.appendChild(div);
  });
}

function renderHRJustifications() {
  const el = document.getElementById("hr-justifications");
  const list = stateCache.justifications;
  if (list.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  list.forEach(j => {
    const acct = stateCache.accounts.find(a => a.id === j.accountId);
    const name = acct ? acct.name : "#" + j.accountId;
    const div = document.createElement("div");
    div.className = "list-item";
    let attachmentHtml;
    if (j.file) {
      const safe = j.file.replace(/'/g, "&#039;");
      attachmentHtml = '<div class="just-attachment-row">' +
        '<img class="just-thumb" src="' + safe + '" alt="" onclick="openImageModal(this.src)" />' +
        '<button class="btn-mini btn-view" onclick="openImageModal(\'' + safe + '\')">🔍 ' + escapeHtml(t("view_attachment")) + '</button>' +
      '</div>';
    } else {
      attachmentHtml = '<div class="list-meta" style="font-style:italic">' + escapeHtml(t("no_attachment")) + '</div>';
    }
    div.innerHTML =
      '<strong>' + escapeHtml(name) + '</strong>' +
      '<div class="list-meta">' + escapeHtml(j.reason) + '</div>' +
      '<div class="list-meta">' + new Date(j.createdAt).toLocaleString() + '</div>' + attachmentHtml;
    el.appendChild(div);
  });
}

function renderDirectory(employees) {
  const el = document.getElementById("hr-directory");
  if (employees.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  employees.forEach(e => {
    const status = getAccountStatus(e.id);
    const age = calcAge(e.dob);
    const ageHtml = age !== null ? '<span class="dir-age">' + age + " " + escapeHtml(t("years_unit")) + '</span>' : "";
    const div = document.createElement("div");
    div.className = "list-item dir-item";
    div.innerHTML = '<div class="dir-info"><strong>' + escapeHtml(e.name) + '</strong> ' + ageHtml +
      '<div class="list-meta">' + escapeHtml(e.identifier) + '</div></div>' +
      '<span class="status-badge ' + statusClass(status) + '">' + escapeHtml(statusLabel(status)) + '</span>';
    el.appendChild(div);
  });
}

function renderRetirement(employees) {
  const el = document.getElementById("hr-retirement");
  const items = employees.filter(e => e.dob).map(e => ({ ...e, age: calcAge(e.dob) }))
    .filter(e => e.age >= RETIREMENT_AGE - RETIREMENT_WARN_YEARS).sort((a, b) => b.age - a.age);
  if (items.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  items.forEach(e => {
    const yearsLeft = RETIREMENT_AGE - e.age;
    const noteText = yearsLeft <= 0 ? t("at_retirement_age") : t("retires_in", { n: yearsLeft });
    const div = document.createElement("div");
    div.className = "list-item retire-item" + (yearsLeft <= 0 ? " retire-now" : "");
    div.innerHTML = '<strong>' + escapeHtml(e.name) + '</strong><span class="dir-age">' + e.age + " " + escapeHtml(t("years_unit")) + '</span>' +
      '<div class="list-meta">' + escapeHtml(noteText) + '</div>';
    el.appendChild(div);
  });
}

function renderList(containerId, items, tplFn) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!items || items.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  items.forEach(item => { const div = document.createElement("div"); div.className = "list-item"; div.innerHTML = tplFn(item); el.appendChild(div); });
}

// =====================
// CLEAR ALL
// =====================
function clearAll() {
  showConfirm(t("confirm_clear_all"), async () => {
    try { await api("/clear-all", { method: "POST" }); activeHrThread = null; refreshAll(); }
    catch (e) { alert(mapAuthError(e)); }
  });
}

// =====================
// CUSTOM CONFIRM
// =====================
let _confirmCallback = null;
function showConfirm(message, onAccept) {
  document.getElementById("confirm-message").textContent = message;
  _confirmCallback = onAccept;
  document.getElementById("confirm-modal").classList.remove("hidden");
}
function closeConfirm(event) {
  if (event && event.target !== document.getElementById("confirm-modal")) return;
  document.getElementById("confirm-modal").classList.add("hidden");
  _confirmCallback = null;
}
function acceptConfirm() {
  const cb = _confirmCallback;
  _confirmCallback = null;
  document.getElementById("confirm-modal").classList.add("hidden");
  if (typeof cb === "function") cb();
}

// =====================
// IMAGE VIEWER
// =====================
function openImageModal(src) {
  document.getElementById("image-modal-img").src = src;
  document.getElementById("image-modal").classList.remove("hidden");
}
function closeImageModal(event) {
  if (event && event.target !== document.getElementById("image-modal")) return;
  document.getElementById("image-modal").classList.add("hidden");
  document.getElementById("image-modal-img").src = "";
}

// =====================
// NOTIFICATIONS
// =====================
function renderNotifs() {
  const badge = document.getElementById("notif-badge");
  const list = document.getElementById("notif-list");
  const unread = notifs.filter(n => !n.read).length;
  if (unread > 0) { badge.classList.remove("hidden"); badge.textContent = unread > 9 ? "9+" : String(unread); }
  else badge.classList.add("hidden");
  if (notifs.length === 0) { list.innerHTML = '<p class="empty-msg">' + escapeHtml(t("notif_empty")) + '</p>'; return; }
  list.innerHTML = "";
  notifs.forEach(n => {
    const d = document.createElement("div");
    d.className = "notif-item" + (n.read ? "" : " unread");
    d.innerHTML = '<div class="notif-msg">' + escapeHtml(n.message) + '</div>' +
      '<div class="notif-time">' + new Date(n.createdAt).toLocaleString() + '</div>';
    list.appendChild(d);
  });
}

function toggleNotifs() {
  const panel = document.getElementById("notif-panel");
  panel.classList.toggle("hidden");
  if (!panel.classList.contains("hidden")) {
    setTimeout(() => {
      document.addEventListener("click", _notifsOutsideClick, true);
    }, 0);
  } else {
    document.removeEventListener("click", _notifsOutsideClick, true);
  }
}
function _notifsOutsideClick(e) {
  const panel = document.getElementById("notif-panel");
  const bell = document.getElementById("notif-bell");
  if (!panel.contains(e.target) && !bell.contains(e.target)) {
    panel.classList.add("hidden");
    document.removeEventListener("click", _notifsOutsideClick, true);
  }
}

async function markAllNotifsRead() {
  try { await api("/notifications/mark-read", { method: "POST" }); refreshAll(); } catch {}
}

// =====================
// ACCOUNT MODAL
// =====================
function openAccountModal() {
  document.getElementById("acct-name").value = me.name || "";
  document.getElementById("acct-dob").value = me.dob || "";
  document.getElementById("acct-cur-pass").value = "";
  document.getElementById("acct-new-pass").value = "";
  document.getElementById("acct-name-msg").textContent = "";
  document.getElementById("acct-dob-msg").textContent = "";
  document.getElementById("acct-pass-msg").textContent = "";
  if (me.role === "hr") {
    document.getElementById("acct-hr-section").classList.remove("hidden");
    renderAccountUserList();
  } else {
    document.getElementById("acct-hr-section").classList.add("hidden");
  }
  document.getElementById("account-modal").classList.remove("hidden");
}
function closeAccountModal(event) {
  if (event && event.target !== document.getElementById("account-modal")) return;
  document.getElementById("account-modal").classList.add("hidden");
}

async function saveAccountName() {
  const newName = document.getElementById("acct-name").value.trim();
  if (!newName) { showFeedback("acct-name-msg", t("err_name_empty"), "error"); return; }
  try {
    await api("/account/name", { method: "PUT", body: { name: newName } });
    me.name = newName;
    const initials = newName.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
    document.getElementById("user-avatar").textContent = initials;
    document.getElementById("user-name-display").textContent = newName;
    showFeedback("acct-name-msg", t("msg_name_updated"), "success");
    refreshAll();
  } catch (e) { showFeedback("acct-name-msg", mapAuthError(e), "error"); }
}

async function saveAccountDob() {
  const dob = document.getElementById("acct-dob").value;
  try {
    await api("/account/dob", { method: "PUT", body: { dob: dob || null } });
    me.dob = dob || null;
    showFeedback("acct-dob-msg", t("msg_dob_updated"), "success");
    refreshAll();
  } catch (e) { showFeedback("acct-dob-msg", mapAuthError(e), "error"); }
}

async function saveAccountPassword() {
  const cur = document.getElementById("acct-cur-pass").value;
  const np = document.getElementById("acct-new-pass").value;
  if (!cur || !np) { showFeedback("acct-pass-msg", t("err_pass_fields"), "error"); return; }
  if (np.length < 6) { showFeedback("acct-pass-msg", t("err_pass_short"), "error"); return; }
  try {
    await api("/account/password", { method: "PUT", body: { currentPassword: cur, newPassword: np } });
    document.getElementById("acct-cur-pass").value = "";
    document.getElementById("acct-new-pass").value = "";
    showFeedback("acct-pass-msg", t("msg_pass_changed"), "success");
  } catch (e) { showFeedback("acct-pass-msg", mapAuthError(e), "error"); }
}

function confirmDeleteAccount() {
  showConfirm(t("confirm_delete_my_account"), async () => {
    try { await api("/account", { method: "DELETE" }); document.getElementById("account-modal").classList.add("hidden"); handleLogout(); }
    catch (e) { alert(mapAuthError(e)); }
  });
}

function renderAccountUserList() {
  const container = document.getElementById("acct-user-list");
  if (!stateCache) { container.innerHTML = ""; return; }
  const accs = stateCache.accounts.filter(a => a.role !== "hr");
  if (accs.length === 0) { container.innerHTML = '<p class="empty-msg">' + escapeHtml(t("no_employee_accounts")) + '</p>'; return; }
  container.innerHTML = "";
  accs.forEach(acc => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.style.display = "flex"; div.style.justifyContent = "space-between"; div.style.alignItems = "center";
    div.innerHTML = '<div><strong style="color:var(--primary)">' + escapeHtml(acc.name) + '</strong>' +
      '<div class="list-meta">' + escapeHtml(acc.identifier) + '</div></div>' +
      '<button class="btn-danger" style="width:auto;padding:8px 14px;font-size:12px;margin-top:0;min-height:38px" onclick="hrDeleteAccount(' + acc.id + ',\'' + acc.name.replace(/'/g, "\\'") + '\')">' + escapeHtml(t("delete_btn")) + '</button>';
    container.appendChild(div);
  });
}

function hrDeleteAccount(accountId, accountName) {
  showConfirm(t("confirm_delete_user", { name: accountName }), async () => {
    try { await api("/account/" + accountId, { method: "DELETE" }); refreshAll(); renderAccountUserList(); }
    catch (e) { alert(mapAuthError(e)); }
  });
}

// =====================
// FEEDBACK / SECURITY
// =====================
function showFeedback(id, msg, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className = "feedback-msg " + type;
  setTimeout(() => { el.textContent = ""; el.className = "feedback-msg"; }, 3500);
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// =====================
// INIT
// =====================
(async function init() {
  loadTheme();
  const savedLang = localStorage.getItem("wp_lang") || "en";
  setLang(savedLang);
  setSignupMode("join");
  try {
    const r = await api("/auth/me");
    me = r.account; company = r.company;
    launchApp();
  } catch {
    // not logged in
  }
})();
