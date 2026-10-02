const L={
en:{tag:"Pause. Verify. Stay Protected.",welcome:"Welcome to DhanRakshak",wsub:"Before you click, share, or pay — make sure you're safe.",start:"Get Started",cont:"Continue",back:"← Back",home:"Home",hist:"History",comm:"Community",prof:"Profile",greet:"You're in control of your money.",think:"Think it's a scam?",chk:"Check first. Decide with confidence.",shot:"Check Screenshot",shotd:"Check suspicious messages, payment requests, or screenshots.",link:"Check Link",linkd:"Inspect a suspicious website link before opening it.",pay:"Before You Pay",payd:"Pause and verify before sending money.",rep:"Report Scam",risk:"My Risk History",rad:"Neighborhood Fraud Radar",comp:"Trusted Companion",q1:"Who is asking you to pay?",q2:"Why are they asking you to pay?",q3:"Were you told to act urgently?",q4:"Did you independently verify the request?",q5:"Do you completely understand what you're paying for?",pause:"Take a Moment Before Proceeding",pausem:"You haven't independently verified this request, or you're being asked to act urgently. Pause before sending money.",verify:"Verify",ask:"Ask Trusted Companion",cancel:"Cancel",home2:"Back to Home",nowarn:"No Major Warning Signs Detected",nowarnm:"We didn't identify major warning signs in the available content. This does not guarantee it is genuine. Verify independently before paying.",ind:"Verify independently using official contact details you found yourself — never numbers or links from the message."},
hi:{tag:"रुकें। जाँचें। सुरक्षित रहें।",welcome:"DhanRakshak में स्वागत है",wsub:"क्लिक करने, शेयर करने या पैसे भेजने से पहले सुनिश्चित करें कि आप सुरक्षित हैं।",start:"शुरू करें",cont:"आगे बढ़ें",back:"← वापस",home:"होम",hist:"इतिहास",comm:"समुदाय",prof:"प्रोफ़ाइल",greet:"आपका पैसा, आपका नियंत्रण।",think:"क्या यह स्कैम लगता है?",chk:"पहले जाँचें, फिर भरोसे से फ़ैसला करें।",shot:"स्क्रीनशॉट जाँचें",shotd:"संदिग्ध मैसेज या पेमेंट रिक्वेस्ट जाँचें।",link:"लिंक जाँचें",linkd:"खोलने से पहले संदिग्ध लिंक देखें।",pay:"भुगतान से पहले",payd:"पैसे भेजने से पहले रुकें और जाँचें।",rep:"स्कैम रिपोर्ट करें",risk:"मेरा जोखिम इतिहास",rad:"मोहल्ला फ्रॉड रडार",comp:"भरोसेमंद साथी",q1:"आपसे पैसे कौन माँग रहा है?",q2:"वे पैसे क्यों माँग रहे हैं?",q3:"क्या आपको जल्दी करने को कहा गया?",q4:"क्या आपने खुद इसकी पुष्टि की?",q5:"क्या आप पूरी तरह समझते हैं कि किसलिए भुगतान कर रहे हैं?",pause:"आगे बढ़ने से पहले एक पल रुकें",pausem:"आपने इसकी खुद पुष्टि नहीं की है, या जल्दी करने का दबाव है। पैसे भेजने से पहले रुकें। पैसे भेजने से पहले ek baar ruk kar jaanch kar ein.",verify:"जाँचें",ask:"भरोसेमंद साथी से पूछें",cancel:"रद्द करें",home2:"होम पर जाएँ",nowarn:"कोई बड़ा चेतावनी संकेत नहीं मिला",nowarnm:"उपलब्ध जानकारी में बड़े चेतावनी संकेत नहीं मिले। इसका मतलब यह नहीं कि यह असली है। पैसे देने से पहले खुद जाँचें।",ind:"खुद ढूँढे गए आधिकारिक नंबर से ही जाँचें — मैसेज के नंबर या लिंक से नहीं।"}
};
const LANGS=["English","हिंदी","বাংলা","मराठी","தமிழ்","తెలుగు","ગુજરાતી","ಕನ್ನಡ","മലയാളം","ਪੰਜਾਬੀ"];

let S={scr:"splash",lang:"en",li:0,stack:[],q:0,ans:{},err:"",res:null,sel:[],f:"All",area:"Lucknow region",dual:false,comp:"Ravi (son)",cs:"",modal:null,det:null,
hist:[["Sep 28","Link","Suspicious link checked","Reported"],["Sep 30","Screenshot","High-risk screenshot detected","Did not pay"],["Oct 2","Pay","High-pressure payment request","Paused"]]};

const t=k=>(L[S.lang][k]||L.en[k]||k);

const logo=(s=56)=>`<svg width="${s}" height="${s}" viewBox="0 0 64 64"><path d="M32 4 56 13v18c0 15-10 26-24 30C18 57 8 46 8 31V13z" fill="#12345A" stroke="#12B8A6" stroke-width="2.5"/><path d="M22 28h20M22 34h14M24 24h18" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".45"/><path d="M20 35l8 8 17-19" fill="none" stroke="#20D6C2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function go(s,push=true){if(push)S.stack.push(S.scr);S.scr=s;S.err="";R()}
function back(){S.scr=S.stack.pop()||"home";R()}

const B=(txt,fn,c="")=>`<button class="btn ${c}" onclick="${fn}">${txt}</button>`;
const bk=()=>`<button class="back" onclick="back()">${t("back")}</button>`;
const card=(i,h,d,fn)=>`<button class="card" onclick="${fn}"><span class="ic">${i}</span><span><b>${h}</b>${d?`<br><span class="note">${d}</span>`:""}</span></button>`;
const nav=()=>`<div class="nav">${[["home","🏠",t("home")],["history","🕘",t("hist")],["radar","📡",t("comm")],["profile","👤",t("prof")]].map(x=>`<button class="${S.scr==x[0]?"on":""}" onclick="S.stack=[];go('${x[0]}',false)">${x[1]}<br>${x[2]}</button>`).join("")}</div>`;
const demo=`<p class="note">Prototype: results are simulated sample analysis, not a live AI service.</p>`;

const Q=[["q1","Bank,Company,Person,Unknown,Other"],["q2",""],["q3","Yes – deadline or threat,No"],["q4","Yes,No,Not sure"],["q5","Yes,No,Not sure"]];

function add(e){S.hist.unshift(["Oct 2",...e]);}

const CK={
link:["Disconnect from the site; don't enter details","Clear browser data and run a device security scan","Change passwords if you typed any"],
otp:["Call your bank using the number on your card NOW to block access","Change passwords and UPI PIN","Check recent transactions"],
info:["Watch for misuse of your ID; be wary of follow-up calls","Enable two-step verification on key accounts"],
pay:["Call your bank/payment app via official number immediately","Note transaction ID and screenshot proof","Report at the national cyber-crime portal (cybercrime.gov.in) or call 1930"],
bank:["Block the card / reset net-banking via your bank's official channel","Change PIN and passwords"],
unsure:["Pause all contact","Check accounts for unfamiliar activity"]
};
const REP=[["link","I clicked a suspicious link"],["otp","I shared an OTP"],["info","I shared personal information"],["pay","I made a payment"],["bank","I shared banking/card information"],["unsure","I'm not sure"]];
const ALERTS=[
["Fake KYC payment messages","Phishing","This week",14,"Messages claim your account will be blocked unless you pay a 'KYC fee'. Banks never ask this by SMS link."],
["Fake job offers on WhatsApp","Job fraud","This month",9,"Pay-to-start 'jobs' with task rewards. Real employers don't charge fees."],
["Electricity bill disconnection calls","Impersonation","This week",7,"Callers threaten a cut-off tonight. Check on the official utility app."]
];

function render(){const x=S.scr;

if(x=="splash"){setTimeout(()=>{if(S.scr=="splash")go("welcome",false)},1800);return`<div class="s dark">${logo(96)}<h1>DhanRakshak</h1><p>${t("tag")}</p><div class="bar" style="width:140px"><i style="width:70%"></i></div></div>`}

if(x=="welcome")return`<div class="s dark">${logo(80)}<h1>${t("welcome")}</h1><p>${t("wsub")}</p><br>${B(t("start"),"go('lang')")}<p class="note">Your safety starts with one simple check.</p></div>`;

if(x=="lang")return`<div class="s">${bk()}<h2>Choose Language / भाषा चुनें</h2>${LANGS.map((l,i)=>`<button class="card ${S.li==i?"sel":""}" onclick="S.li=${i};S.lang=${i==1?"'hi'":"'en'"};R()">${l}</button>`).join("")}<p class="note">Full translations are shown for English and हिंदी in this demo; other languages fall back to English.</p>${B(t("cont"),"go('login')")}</div>`;

if(x=="login")return`<div class="s">${bk()}<h2>Simple &amp; Safe</h2><div class="alert ok">✔ No bank, card, PAN/Aadhaar or financial info needed.<br>✔ Never share OTP, PIN or passwords here.</div><input type="text" placeholder="Mobile number or email"><p class="note">Demo only: no account is created.</p>${B("Sign in","S.stack=[];go('home',false)")}${B("Create account","S.stack=[];go('home',false)","o")}${B("Continue as guest","S.stack=[];go('home',false)","o")}</div>`;

if(x=="home")return`<div class="s"><div class="row" style="align-items:center;flex:none">${logo(36)}<b style="flex:2">DhanRakshak</b><button class="btn o" style="min-height:44px" onclick="S.lang=S.lang=='en'?'hi':'en';S.li=S.lang=='hi'?1:0;R()">${S.lang=="en"?"हिंदी":"EN"}</button></div><p>${t("greet")} 🔒 Private by design</p><div class="hero"><h2>${t("think")}</h2><p>${t("chk")}</p></div>${card("📷",t("shot"),t("shotd"),"go('shot')")}${card("🔗",t("link"),t("linkd"),"go('link')")}${card("₹",t("pay"),t("payd"),"S.q=0;S.ans={};go('pay')")}<div class="row">${[["🚩",t("rep"),"S.sel=[];go('rep')"],["🕘",t("risk"),"go('history')"],["📡",t("rad"),"go('radar')"],["🤝",t("comp"),"go('comp')"]].map(c=>`<button class="card" style="flex-direction:column;align-items:flex-start;flex:1 1 40%" onclick="${c[2]}"><span>${c[0]}</span><b style="font-size:15px">${c[1]}</b></button>`).join("")}</div></div>${nav()}`;

if(x=="shot")return`<div class="s">${bk()}<h2>Check a Suspicious Screenshot</h2><p>Upload a screenshot of a suspicious message, SMS, offer, or payment request.</p><div class="card" style="border-style:dashed;flex-direction:column;justify-content:center;min-height:150px;text-align:center"><span class="ic">📤</span>Prototype: choose a sample screenshot</div>${B("Sample: urgent KYC payment SMS","run('threat')")}${B("Sample: friendly delivery update","run('safe')","o")}<p class="note">Privacy: this demo doesn't upload anything. A real version would state clearly how images are handled.</p></div>`;

if(x=="load")return`<div class="s dark"><div class="spin"></div><h2>Analyzing…</h2><p>Reading text · checking urgency · looking for links</p>${demo}</div>`;

if(x=="sres"){const th=S.res=="threat";return th?`<div class="s">${bk()}<div class="alert bad"><span class="chip" style="background:var(--bad);color:#fff">⚠ 3 warning signs</span><h2>Potential Scam Warning</h2></div>${[["⏰ Urgent payment request","Says your account blocks in 2 hours."],["💸 Suspicious financial claim","Asks for a ₹10 'KYC fee' to a personal UPI ID."],["🔗 Unverified link","bit.ly link couldn't be verified."]].map(a=>`<div class="card"><span><b>${a[0]}</b><br><span class="note">${a[1]}</span></span></div>`).join("")}<p class="note">This is an assessment of available evidence, not a definitive determination.</p>${demo}${B("Do not pay yet — Verify independently","go('verify')")}${B("Check Link","S.url='bit.ly/kyc-now';chkLink()","o")}${B(t("ask"),"go('comp')","o")}${B(t("rep"),"S.sel=[];go('rep')","o")}${B(t("home2"),"S.stack=[];go('home',false)","o")}</div>`
:`<div class="s"><div class="alert ok"><h2>✔ ${t("nowarn")}</h2><p>${t("nowarnm")}</p></div><div class="alert wr">${t("ind")}</div>${demo}${B("Verify independently","go('verify')")}${B(t("home2"),"S.stack=[];go('home',false)","o")}</div>`}

if(x=="link")return`<div class="s">${bk()}<h2>Check a Link Before Opening</h2><p>Paste a suspicious link to inspect it.</p><input type="text" id="u" placeholder="https://…" value="${S.url||""}">${S.err?`<p style="color:var(--bad)">⚠ ${S.err}</p>`:""}<div class="row">${B("Paste","pasteU()","o")}${B("Clear","S.url='';R()","o")}</div>${B("Check Link","S.url=document.getElementById('u').value;chkLink()")}<p class="note">Try: bit.ly/kyc-update or example.com. We never open the link for you.</p></div>`;

if(x=="lres"){const bad=S.res=="bad";return bad?`<div class="s">${bk()}<div class="alert bad"><span class="chip" style="background:var(--bad);color:#fff">LINK ALERT</span><h2>We couldn't verify this link</h2><p>Avoid entering sensitive information.</p></div><div class="card"><span><b>Why flagged</b><br><span class="note">${S.why}</span></span></div>${demo}${B("Go Back","back()","o")}${B("Verify Independently","go('verify')")}${B("Report","S.sel=['link'];go('rep')","d")}</div>`
:`<div class="s">${bk()}<div class="alert ok"><h2>✔ ${t("nowarn")}</h2><p>We did not identify major warning signs in the available checks. This does not guarantee the link is safe.</p></div><div class="alert wr">${t("ind")}</div>${demo}${B(t("home2"),"S.stack=[];go('home',false)")}</div>`}

if(x=="verify")return`<div class="s">${bk()}<h2>Verify Independently</h2><div class="card"><span>1. Find the official website or number yourself (card, passbook, official app).<br><br>2. Never use contact details from the suspicious message.<br><br>3. Ask: did <i>I</i> start this request?<br><br>4. Never share OTP, PIN or password.</span></div>${B(t("ask"),"go('comp')")}${B(t("home2"),"S.stack=[];go('home',false)","o")}</div>`;

if(x=="pay"){const [k,o]=Q[S.q];const op=o?o.split(","):[];return`<div class="s">${bk()}<div class="bar"><i style="width:${(S.q+1)*20}%"></i></div><p class="note">Question ${S.q+1} of 5 · No judgement — just a pause.</p><h2>${t(k)}</h2>${o?op.map(v=>`<button class="card ${S.ans[S.q]==v?"sel":""}" style="min-height:52px" onclick="S.ans[S.q]='${v}';R()">${v}</button>`).join(""):`<textarea id="ta" rows="3" placeholder="e.g. Fee to unblock my account">${S.ans[1]||""}</textarea><div class="row">${["Fee / deposit","Prize or refund","Loan","Not sure"].map(v=>`<button class="btn o" style="font-size:14px" onclick="document.getElementById('ta').value='${v}'">${v}</button>`).join("")}</div>`}${B(S.q<4?t("cont"):"See my check","nextQ()")}</div>`}

if(x=="assess"){const a=S.ans,sig=[];
if((a[2]||"").startsWith("Yes"))sig.push("Artificial urgency or threats");
if(a[3]!="Yes")sig.push("Request not independently verified");
if(a[4]!="Yes")sig.push("Unclear what the payment is for");
if(["Unknown","Person"].includes(a[0]))sig.push("Sender identity unconfirmed");
S.sig=sig;
return`<div class="s"><div class="spin"></div><h2 style="text-align:center">Checking pressure signals…</h2>${setTimeout(()=>{if(S.scr=="assess")go(sig.length&&(a[2]||"").startsWith("Y")||a[3]!="Yes"?"pause":"outcome",false)},1200)&&""}</div>`}

if(x=="pause")return`<div class="s dark"><div style="font-size:60px">⏸</div><h1>${t("pause")}</h1><p>${t("pausem")}</p><br>${B(t("verify"),"go('verify')")}${B(t("ask"),"go('comp')","o")}${B(t("cancel"),"add(['Pay','Payment check cancelled','Stopped']);S.stack=[];go('home',false)","o")}<p class="note">DhanRakshak can't freeze a real bank transaction — this is a prompt to think.</p></div>`;

if(x=="outcome")return`<div class="s">${bk()}<h2>Your Decision</h2><div class="alert ${S.sig&&S.sig.length?"wr":"ok"}"><b>Risk signals seen:</b><br>${(S.sig&&S.sig.length?S.sig:["No major pressure signals from your answers"]).map(s=>"• "+s).join("<br>")}</div><p class="note">This reflects only what you told us. You make the final decision.</p>${B("Continue","S.modal='Before you continue, verify independently using official contact details. Companion approval or this check is not proof of safety.';R()")}${B("Stop","add(['Pay','High-pressure payment request','Stopped']);S.modal='Good call. Would you like to report it?';S.rp=1;R()","o")}${B(t("ask"),"go('comp')","o")}${B(t("rep"),"S.sel=[];go('rep')","o")}</div>`;

if(x=="comp")return`<div class="s">${bk()}<h2>${t("comp")}</h2><p>Would you like someone you trust to review this?</p><div class="card"><span class="ic">🤝</span><span><b>${S.comp}</b><br><span class="note">Preferred companion</span></span></div><div class="row">${["Ravi (son)","Meena (friend)"].map(n=>B(n,`S.comp='${n}';R()`,"o")).join("")}</div><div class="alert wr">Shared with ${S.comp}: your answers and warning signs only. Original evidence is shared only if you choose.</div>${B("Send for second opinion","S.cs='wait';go('cstat')")}</div>`;

if(x=="cstat"){return`<div class="s">${bk()}<h2>Companion review</h2><div class="card"><span><b>${S.comp}</b>: ${S.cs=="wait"?"Waiting for response…":S.cs}</span></div>${S.cs=="wait"?`<p>Demo: simulate companion's reply</p>${B("Recommends pausing","S.cs='Recommends pausing';R()","o")}${B("Confirms (not proof of safety)","S.cs='Confirms — not proof of safety';R()","o")}${B("Needs more information","S.cs='Asked for more information';R()","o")}`:""}<label class="card"><input type="checkbox" ${S.dual?"checked":""} onchange="S.dual=this.checked;R()"> Dual Authorization (app-level only)</label>${S.dual?`<div class="alert ${S.cs.startsWith("Confirms")?"ok":"wr"}">${S.cs.startsWith("Confirms")?"You + companion confirmed. You may proceed — but keep verifying.":"Protected flow incomplete: both people must confirm."}</div>`:""}${B(t("home2"),"S.stack=[];go('home',false)")}</div>`}

if(x=="rep")return`<div class="s">${bk()}<h2>What happened?</h2><p>Select all that apply.</p>${REP.map(r=>`<button class="card ${S.sel.includes(r[0])?"sel":""}" style="min-height:52px" onclick="S.sel=S.sel.includes('${r[0]}')?S.sel.filter(z=>z!='${r[0]}'):[...S.sel,'${r[0]}'];R()">${S.sel.includes(r[0])?"☑":"☐"} ${r[1]}</button>`).join("")}${B("Continue","if(S.sel.length)go('dmg');else{S.err='x';alert('Please select at least one option')}")}</div>`;

if(x=="dmg"){const pr=REP.filter(r=>S.sel.includes(r[0])).flatMap(r=>CK[r[0]]);const st=[["Stop communication","Don't continue with the suspected scammer."],["Don't share anything further","Especially OTPs, PINs, passwords."],["Secure affected accounts",pr[0]||"Check your accounts."],["Contact the official institution","Use independently verified contact details."],["Report the incident","Follow the official reporting channel."]];return`<div class="s">${bk()}<h2>Damage Control</h2><p class="note">Tailored to what you selected. Being targeted is not your fault.</p>${st.map((s,i)=>`<div class="card"><span class="ic">${i+1}</span><span><b>${s[0]}</b><br><span class="note">${s[1]}</span></span></div>`).join("")}${pr.length>1?`<div class="alert wr"><b>Also for your situation</b><br>${[...new Set(pr.slice(1))].map(p=>"• "+p).join("<br>")}</div>`:""}<p class="note">Official portal: cybercrime.gov.in · Helpline 1930. Verify details yourself; this demo submits no report.</p>${B("Save to Risk History","add(['Report','Incident reported','Checklist followed']);S.stack=[];go('history',false)")}${B(t("home2"),"S.stack=[];go('home',false)","o")}</div>`}

if(x=="history"){const fs=["All","Link","Screenshot","Pay","Report"];const h=S.hist.filter(e=>S.f=="All"||e[1]==S.f);return`<div class="s"><h2>${t("risk")}</h2><div class="row">${fs.map(f=>`<button class="btn ${S.f==f?"":"o"}" style="min-height:40px;padding:4px;font-size:14px" onclick="S.f='${f}';R()">${f}</button>`).join("")}</div>${h.length?h.map((e,i)=>`<button class="card" onclick="S.det=${JSON.stringify(e).replace(/"/g,"&quot;")};go('case')"><span><b>${e[0]} · ${e[1]}</b><br>${e[2]}<br><span class="note">Action: ${e[3]}</span></span></button>`).join(""):`<p>Nothing here yet. Your checks will appear here.</p>`}<p class="note">Sample data. Stored only on this demo page; no bank info.</p>${B("Clear history","S.modal='clear';R()","o")}</div>${nav()}`}

if(x=="case")return`<div class="s">${bk()}<h2>${S.det[2]}</h2><div class="card"><span>${S.det[0]} · ${S.det[1]}<br>Action taken: ${S.det[3]}<br><span class="note">Being targeted is never your fault.</span></span></div></div>`;

if(x=="radar")return`<div class="s"><h2>${t("rad")}</h2><p>Anonymized, aggregated patterns. Illustrative sample data, not live.</p><select id="ar" class="card" onchange="S.area=this.value">${["Lucknow region","Delhi NCR","Mumbai region"].map(a=>`<option ${a==S.area?"selected":""}>${a}</option>`).join("")}</select>${ALERTS.map((a,i)=>card("⚠️",a[0],`${a[1]} · ${a[2]} · ~${a[3]} reports`,`S.det=${i};go('alert')`)).join("")}<p class="note">Reporters are never identified; sparse areas are suppressed.</p></div>${nav()}`;

if(x=="alert"){const a=ALERTS[S.det];return`<div class="s">${bk()}<h2>${a[0]}</h2><span class="chip" style="background:var(--pale)">${a[1]} · ${S.area} · ${a[2]}</span><p style="color:var(--tx)">${a[4]}</p><div class="alert wr"><b>Precautions</b><br>• Never share OTP/PIN<br>• Verify via the official app<br>• Don't pay under pressure</div>${B(t("rep"),"S.sel=[];go('rep')","o")}</div>`}

if(x=="profile")return`<div class="s"><h2>${t("prof")}</h2>${card("🌐","Language",LANGS[S.li],"S.stack=[];go('lang')")}${card("🤝",t("comp"),S.comp,"go('comp')")}<label class="card"><input type="checkbox" ${S.dual?"checked":""} onchange="S.dual=this.checked;R()"> Dual Authorization</label><div class="alert ok"><b>Privacy</b><br>No bank, card, PAN or Aadhaar data is collected. Guest mode available.</div>${B("Clear history","S.modal='clear';R()","o")}</div>${nav()}`;

return""}

function run(r){S.res=r;go("load");setTimeout(()=>{if(S.scr=="load")go("sres",false)},1800)}

function pasteU(){navigator.clipboard&&navigator.clipboard.readText().then(v=>{S.url=v;R()}).catch(()=>{S.err="Paste not allowed here; type the link.";R()})}

function chkLink(){
  const u=(S.url||"").trim();
  if(!/^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i.test(u)){S.err="That doesn't look like a valid link.";S.scr="link";return R()}
  const w=[];
  if(/^(https?:\/\/)?(bit\.ly|tinyurl|t\.co)/i.test(u))w.push("URL shortener hides the real destination");
  if(/kyc|verify|update|reward|login/i.test(u))w.push("Contains words often used in phishing");
  if(/\.(xyz|top|click|shop)(\/|$)/i.test(u))w.push("Uncommon domain ending");
  if(/-/.test(u.split("/")[0]))w.push("Hyphenated, possibly lookalike domain");
  S.why=w.join("; ")||"";
  S.res=w.length?"bad":"ok";
  if(!w.length)S.why="";
  add(["Link",w.length?"Suspicious link checked":"Link checked","Viewed"]);
  S.stack.push(S.scr=="sres"?"sres":"link");
  S.scr="lres";S.err="";R()
}

function nextQ(){
  if(S.q==1){S.ans[1]=document.getElementById("ta").value}
  if(S.q!=1&&!S.ans[S.q])return alert("Please choose an option");
  if(S.q<4){S.q++;R()}else go("assess")
}

function R(){
  const a=document.getElementById("app");
  a.innerHTML=render()+(S.modal?`<div class="modal"><div><p style="color:var(--tx)">${S.modal=="clear"?"Clear all history? This can't be undone.":S.modal}</p>${S.modal=="clear"?B("Clear","S.hist=[];S.modal=null;R()","d")+B("Keep","S.modal=null;R()","o"):S.rp?B("Report scam","S.modal=null;S.rp=0;S.sel=[];go('rep')")+B("Not now","S.modal=null;S.rp=0;S.stack=[];go('home',false)","o"):B("OK","S.modal=null;S.stack=[];go('home',false)")}</div></div>`:"")
}

R();
