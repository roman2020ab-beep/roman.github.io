/*
  ПАНЕЛЬ НАСТРОЙКИ КВЕСТА
  Меняй тексты и имена файлов здесь. Остальной код ниже можно не трогать.
*/
const CONFIG={
  music:["music1.mp3","music2.mp3","music3.mp3","music4.mp3"],
  musicVolume:.22,
  saveProgress:true
};

const QUEST=[
 {type:"welcome",title:"Наше маленькое приключение",video:"intro.mp4",text:"Добро пожаловать. Всё начинается с этого видео."},
 {type:"chapter",number:1,title:"Глава 1",
  quiz:{question:"Что бы я выбрал?",options:["Целый год ходить на работу и ничего там не делать","Готовый диплом","Купить военник за 5 миллионов рублей","Запас чипсов на 2 года"],correct:3,feedback:["я и так на работе ничего не делаю","лучше сам сделаю","Я считаю это слишком дорого","чипсы нынче дорогие и мы их очень любим"]},
  task:{type:"hotspot",title:"Найди хранителя кухни",text:"На фотографии спрятан тот, кого ты должна найти. Нажми на место, где он находится.",image:"chapter1-kitchen.jpg",hotspot:{x:78,y:57,w:16,h:24}},video:"chapter1.mp4"},
 {type:"chapter",number:2,title:"Глава 2",
  quiz:{question:"Когда был наш первый поцелуй?",options:["19 ноября (вторник)","18 ноября (понедельник)","17 ноября (воскресенье)","20 ноября (среда)"],correct:1,feedback:["Неправильно.","18 ноября, примерно в 10:40 вечера ❤️","Неправильно.","Неправильно."]},
  task:{type:"differences",title:"Найди отличия",text:"Найди все отличия между двумя фотографиями.",imageA:"chapter2-a.jpg",imageB:"chapter2-b.jpg",points:[{x:25,y:30},{x:72,y:25},{x:48,y:58},{x:80,y:72},{x:18,y:78}]},video:"chapter2.mp4"},
 {type:"chapter",number:3,title:"Глава 3",
  quiz:{question:"Какой дом был бы для нас идеальным по моему мнению?",images:["house1.jpg","house2.jpg","house3.jpg","house4.jpg"],options:["Дом №1","Дом №2","Дом №3","Дом №4"],correct:0,feedback:["Правильно.","Неправильно.","Неправильно.","Неправильно."]},
  task:{type:"puzzle",title:"Собери фотографию",text:"Собери фотографию из 12 частей. На телефоне выбирай деталь, затем клетку, куда её поставить.",tilesPath:"chapter3-puzzle",rows:3,cols:4},video:"chapter3.mp4"},
 {type:"chapter",number:4,title:"Глава 4",
  quiz:{question:"Кто первый в переписке написал, что любит и было ли это с сердечками?",options:["Ты с сердечками","Я с сердечками","Ты без сердечек","Я без сердечек"],correct:2,feedback:["Неправильно.","Неправильно.","Правильно.","Неправильно."]},
  task:{type:"memory",title:"Memory",text:"Найди все 9 пар фотографий.",images:["memory1.jpg","memory2.jpg","memory3.jpg","memory4.jpg","memory5.jpg","memory6.jpg","memory7.jpg","memory8.jpg","memory9.jpg"]},video:"chapter4.mp4"},
 {type:"chapter",number:5,title:"Глава 5",
  quiz:{question:"Моя любимая игра на втором месте (потому на первом месте конечно ты)",options:["Crusader Kings 3","Warcraft 3","FIFA 15","Dead by Daylight"],correct:1,feedback:["Неправильно.","Правильно.","Неправильно.","Неправильно."]},
  task:{type:"rebus",title:"Разгадай ребус",text:"Собери слово из трёх частей.",busImage:"rebus-bus.jpg",indianImage:"rebus-indian.jpg",busLetters:"5, 6, 7",indianLetters:"1, 2",finalLetters:"КА",answer:"бусинка"},video:"chapter5.mp4"},
 {type:"chapter",number:6,title:"Глава 6",
  quiz:{question:"Во времена, когда мы постоянно проходили тесты, один был про ревность. Кто оказался более ревнивым и на сколько процентов?",options:["Я — 28%","Ты — 7%","Я — 15%","Ты — 22%"],correct:2,feedback:["Неправильно.","Неправильно.","Правильно.","Неправильно."]},
  task:{type:"audioQuiz",title:"Угадай звук",text:"Прослушай запись и определи, где упал мячик.",audio:"ball.mp3",options:["Кухня","Ванная комната","Большая комната","Балкон"],correct:3,feedback:["Неправильно.","Неправильно.","Неправильно.","Правильно."]},video:"chapter6.mp4"},
 {type:"chapter",number:7,title:"Глава 7",
  quiz:{question:"Чтобы я выбрал?",options:["Потерять зрение","Потерять слух","Потерять левую руку","Потерять ногу"],correct:3,feedback:["Неправильно.","Неправильно.","Неправильно.","Правильно."]},
  task:{type:"sequence",title:"Расставь события по порядку",text:"Поставь события в правильной хронологической последовательности.",items:["1 раз сходили в кино","Начало переписки в ВК","1 раз сходили в театр","Знакомство с родителями","Подарил Лабубу"],correctOrder:["Начало переписки в ВК","1 раз сходили в кино","1 раз сходили в театр","Знакомство с родителями","Подарил Лабубу"]},video:"chapter7.mp4"},
 {type:"chapter",number:8,title:"Глава 8",
  quiz:{question:"Кто больше написал «люблю» по отношению к другому и сколько раз (в переписке Telegram)?",options:["Ты — 23 раза","Ты — 61 раз","Я — 34 раза","Я — 57 раз"],correct:3,feedback:["Неправильно.","Неправильно.","Неправильно.","Правильно."]},
  task:{type:"phrase",title:"Составь фразу",text:"Введи слова по одному в каждое поле. Порядок слов должен быть правильным.",phrase:"Обкончай так,чтобы когда на него садишься,сперма вытекала"},video:"chapter8.mp4"}
];

const app=document.getElementById("app");
let current=Number(localStorage.getItem("quest_current")||0);
let musicIndex=0,music=new Audio(),musicStarted=false,musicPaused=false;
let memory={cards:[],open:[],matched:[],lock:false},puzzle={slots:[],bank:[]};

function save(){if(CONFIG.saveProgress)localStorage.setItem("quest_current",String(current))}
function next(){if(current<QUEST.length-1){current++;save();render();scrollTo(0,0)}else{localStorage.setItem("quest_completed","1");completed()}}
function startMusic(){if(musicStarted)return;musicStarted=true;music.volume=CONFIG.musicVolume;music.onended=()=>{musicIndex=(musicIndex+1)%CONFIG.music.length;playMusic()};playMusic()}
function playMusic(){if(!musicStarted||musicPaused)return;music.src="media/music/"+CONFIG.music[musicIndex];music.play().catch(()=>{})}
function pauseMusic(){musicPaused=true;music.pause()}
function resumeMusic(){musicPaused=false;playMusic()}
function placeholder(path,label="Добавь файл"){return `<div class="placeholder"><div><strong>${label}</strong><br><span class="small">${path}</span></div></div>`}

function render(){
 const q=QUEST[current],pct=current===0?0:Math.round(current/(QUEST.length-1)*100);
 app.innerHTML=`<div class="progress"><div style="width:${pct}%"></div></div><main class="screen"><section class="card" id="card"></section></main>`;
 const card=document.getElementById("card");
 q.type==="welcome"?welcome(card,q):chapter(card,q);
}
function welcome(el,q){
 el.innerHTML=`<h1>${q.title}</h1><p>${q.text}</p><div id="media"></div><button class="primary" id="start">Начать ❤️</button>`;
 el.querySelector("#media").innerHTML=placeholder("media/videos/"+q.video,"Здесь будет приветственное видео");
 el.querySelector("#start").onclick=()=>{
   startMusic();pauseMusic();
   const m=el.querySelector("#media");m.innerHTML=`<video id="v" class="media" controls playsinline src="media/videos/${q.video}"></video>`;
   const v=m.querySelector("video");v.play().catch(()=>{});v.onended=()=>{resumeMusic();const b=el.querySelector("#start");b.textContent="Далее →";b.onclick=next};
 };
}
function chapter(el,q){el.innerHTML=`<p class="small">${q.number} / 8</p><h2>${q.title}</h2><div id="stage"></div>`;quiz(el,q)}
function quiz(el,q){
 const s=el.querySelector("#stage"),z=q.quiz;
 if(z.images)s.innerHTML=`<p>${z.question}</p><div class="choice-images">${z.images.map((im,i)=>`<button class="choice-image" data-i="${i}"><img src="media/images/${im}"><span>Дом №${i+1}</span></button>`).join("")}</div><div class="message" id="msg"></div>`;
 else s.innerHTML=`<p>${z.question}</p><div class="answers">${z.options.map((x,i)=>`<button class="answer" data-i="${i}">${x}</button>`).join("")}</div><div class="message" id="msg"></div>`;
 s.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{
  const i=+b.dataset.i,m=s.querySelector("#msg");
  if(i===z.correct){b.classList.add("selected-good");m.className="message good";m.textContent=z.feedback[i]||"Правильно.";setTimeout(()=>task(el,q),650)}
  else{b.classList.add("selected-bad");m.className="message bad";m.textContent=z.feedback[i]||"Неправильно.";setTimeout(()=>b.classList.remove("selected-bad"),700)}
 });
}
function task(el,q){
 const s=el.querySelector("#stage"),t=q.task;
 if(t.type==="hotspot")hotspot(el,q,t);if(t.type==="differences")differences(el,q,t);if(t.type==="puzzle")puzzleTask(el,q,t);if(t.type==="memory")memoryTask(el,q,t);if(t.type==="rebus")rebus(el,q,t);if(t.type==="audioQuiz")audioQuiz(el,q,t);if(t.type==="sequence")sequence(el,q,t);if(t.type==="phrase")phrase(el,q,t)
}
function success(el,q){el.querySelector("#stage").innerHTML=`<div class="success-anim"><div class="check">✓</div><span class="spark" style="left:20%;top:65%">✦</span><span class="spark" style="left:45%;top:70%;animation-delay:.1s">♥</span><span class="spark" style="left:70%;top:55%;animation-delay:.2s">✦</span><span class="spark" style="left:82%;top:70%;animation-delay:.3s">♥</span></div><button class="primary" id="open">Открыть видео ▶️</button>`;el.querySelector("#open").onclick=()=>video(el,q)}
function video(el,q){
 pauseMusic();const s=el.querySelector("#stage");s.innerHTML=`<div id="vh">${placeholder("media/videos/"+q.video,"Здесь будет видео")}</div><button class="primary hidden" id="go">Далее →</button>`;
 const h=s.querySelector("#vh");h.innerHTML=`<video id="cv" class="media" controls playsinline src="media/videos/${q.video}"></video>`;
 const v=s.querySelector("#cv");v.play().catch(()=>{});v.onended=()=>{resumeMusic();s.querySelector("#go").classList.remove("hidden")};s.querySelector("#go").onclick=next;
}
function hotspot(el,q,t){
 const s=el.querySelector("#stage");s.innerHTML=`<p>${t.text}</p><div class="photo-wrap" id="hw"><img src="media/images/${t.image}" onerror="this.style.display='none'"><button class="hotspot" id="hs"></button></div><div class="message" id="msg"></div>`;
 const p=t.hotspot,h=s.querySelector("#hs");h.style.left=p.x+"%";h.style.top=p.y+"%";h.style.width=p.w+"%";h.style.height=p.h+"%";
 s.querySelector("#hw").onclick=e=>{const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*100,y=(e.clientY-r.top)/r.height*100;if(x>=p.x&&x<=p.x+p.w&&y>=p.y&&y<=p.y+p.h)success(el,q);else s.querySelector("#msg").textContent="Здесь никого нет 👀"}
}
function differences(el,q,t){
 const s=el.querySelector("#stage");s.innerHTML=`<p>${t.text}</p><div class="diff-wrap"><div class="diff-photo"><img src="media/images/${t.imageA}">${t.points.map((p,i)=>`<button class="diff-point" data-i="${i}" style="left:${p.x}%;top:${p.y}%"></button>`).join("")}</div><div class="diff-photo"><img src="media/images/${t.imageB}"></div></div><div class="counter" id="c">Найдено: 0/${t.points.length}</div>`;
 let found=new Set();s.querySelectorAll(".diff-point").forEach(b=>b.onclick=()=>{let i=+b.dataset.i;if(found.has(i))return;found.add(i);b.classList.add("found");s.querySelector("#c").textContent=`Найдено: ${found.size}/${t.points.length}`;if(found.size===t.points.length)setTimeout(()=>success(el,q),300)})
}
function puzzleTask(el,q,t){
 const s=el.querySelector("#stage"),n=t.rows*t.cols;
 puzzle={slots:Array(n).fill(null),bank:Array.from({length:n},(_,i)=>i).sort(()=>Math.random()-.5)};
 drawPuzzle(el,q,t)
}
function puzzleTile(t,i){return `media/images/${t.tilesPath}/${String(i).padStart(2,"0")}.jpg`}
function drawPuzzle(el,q,t){
 const s=el.querySelector("#stage"),n=t.rows*t.cols;
 s.innerHTML=`<p>${t.text}</p><div class="puzzle">${puzzle.slots.map((v,i)=>`<button class="puzzle-slot" data-slot="${i}">${v===null?"":`<img src="${puzzleTile(t,v)}" alt="Часть пазла">`}</button>`).join("")}</div><p class="small">Выбери деталь, затем нажми клетку, куда её поставить.</p><div class="puzzle-bank">${puzzle.bank.map(v=>`<button class="puzzle-piece" data-piece="${v}"><img src="${puzzleTile(t,v)}" alt="Деталь пазла"></button>`).join("")}</div><div class="message" id="msg"></div>`;
 let selected=null;
 s.querySelectorAll(".puzzle-piece").forEach(b=>b.onclick=()=>{selected=+b.dataset.piece;s.querySelectorAll(".puzzle-piece").forEach(x=>x.style.outline="");b.style.outline="3px solid var(--accent)"});
 s.querySelectorAll(".puzzle-slot").forEach(b=>b.onclick=()=>{
   if(selected===null)return;
   const slot=+b.dataset.slot;
   if(puzzle.slots[slot]!==null && !puzzle.bank.includes(puzzle.slots[slot])) puzzle.bank.push(puzzle.slots[slot]);
   puzzle.bank=puzzle.bank.filter(x=>x!==selected);
   puzzle.slots[slot]=selected;
   selected=null;
   drawPuzzle(el,q,t);
   if(puzzle.slots.every((v,i)=>v===i))setTimeout(()=>success(el,q),400)
 })
}
function memoryTask(el,q,t){memory.cards=[...t.images,...t.images].sort(()=>Math.random()-.5);memory.open=[];memory.matched=[];memory.lock=false;drawMemory(el,q,t)}
function drawMemory(el,q,t){
 const s=el.querySelector("#stage");s.innerHTML=`<p>${t.text}</p><div class="memory">${memory.cards.map((im,i)=>{let vis=memory.open.includes(i)||memory.matched.includes(i);return `<button class="memory-card ${vis?"":"back"} ${memory.matched.includes(i)?"matched":""}" data-i="${i}">${vis?`<img src="media/images/${im}">`:""}</button>`}).join("")}</div><div class="counter">Пары: ${memory.matched.length/2}/${t.images.length}</div>`;
 s.querySelectorAll(".memory-card").forEach(b=>b.onclick=()=>{if(memory.lock)return;let i=+b.dataset.i;if(memory.open.includes(i)||memory.matched.includes(i))return;memory.open.push(i);drawMemory(el,q,t);if(memory.open.length===2){memory.lock=true;let[a,b]=memory.open;if(memory.cards[a]===memory.cards[b]){memory.matched.push(a,b);memory.open=[];memory.lock=false;drawMemory(el,q,t);if(memory.matched.length===memory.cards.length)setTimeout(()=>success(el,q),400)}else setTimeout(()=>{memory.open=[];memory.lock=false;drawMemory(el,q,t)},750)}})
}
function rebus(el,q,t){
 const s=el.querySelector("#stage");s.innerHTML=`<p>${t.text}</p><div class="rebus"><div class="rebus-box"><img src="media/images/${t.busImage}"><div class="small">${t.busLetters}</div></div><div class="rebus-box"><img src="media/images/${t.indianImage}"><div class="small">${t.indianLetters}</div></div><div class="rebus-box"><div class="letters">${t.finalLetters}</div></div></div><input id="a" placeholder="Введите слово"><button class="primary" id="b">Проверить</button><div class="message" id="m"></div>`;
 s.querySelector("#b").onclick=()=>{let v=s.querySelector("#a").value.trim().toLowerCase().replaceAll(" ",""),m=s.querySelector("#m");if(v===t.answer){m.className="message good";m.textContent="Правильно.";setTimeout(()=>success(el,q),450)}else{m.className="message bad";m.textContent="Неправильно."}}
}
function audioQuiz(el,q,t){
 const s=el.querySelector("#stage");s.innerHTML=`<p>${t.text}</p><div class="audio-box"><audio id="a" controls src="media/audio/${t.audio}"></audio></div><p class="small">Во время прослушивания фоновая музыка будет на паузе.</p><div class="answers">${t.options.map((x,i)=>`<button class="answer" data-i="${i}">${x}</button>`).join("")}</div><div class="message" id="m"></div>`;
 const a=s.querySelector("audio");a.onplay=pauseMusic;a.onpause=()=>{if(!a.ended)resumeMusic()};a.onended=resumeMusic;
 s.querySelectorAll(".answer").forEach(b=>b.onclick=()=>{let i=+b.dataset.i,m=s.querySelector("#m");m.className=i===t.correct?"message good":"message bad";m.textContent=t.feedback[i];if(i===t.correct)setTimeout(()=>success(el,q),450)})
}
function sequence(el,q,t){
 const s=el.querySelector("#stage"),order=[...t.items].sort(()=>Math.random()-.5);s.innerHTML=`<p>${t.text}</p><div class="sequence">${order.map((x,i)=>`<div class="seq-item"><span>☰</span><span>${x}</span><select>${[1,2,3,4,5].map(n=>`<option>${n}</option>`).join("")}</select></div>`).join("")}</div><button class="primary" id="b">Проверить</button><div class="message" id="m"></div>`;
 s.querySelector("#b").onclick=()=>{let picked=Array(5).fill(null);s.querySelectorAll(".seq-item").forEach(r=>picked[+r.querySelector("select").value-1]=r.querySelector("span:nth-child(2)").textContent);let ok=picked.every((x,i)=>x===t.correctOrder[i]),m=s.querySelector("#m");m.className=ok?"message good":"message bad";m.textContent=ok?"Правильно.":"Неправильно. Попробуй ещё раз.";if(ok)setTimeout(()=>success(el,q),450)}
}
function phrase(el,q,t){
 const s=el.querySelector("#stage"),words=t.phrase.trim().split(/\s+/);s.innerHTML=`<p>${t.text}</p><div class="word-builder">${words.map((_,i)=>`<div class="word-row"><span>${i+1}.</span><input></div>`).join("")}</div><button class="primary" id="b">Проверить</button><div class="message" id="m"></div>`;
 s.querySelector("#b").onclick=()=>{let v=[...s.querySelectorAll("input")].map(x=>x.value.trim()).join(" ").replaceAll(",","").replace(/\s+/g," ").trim().toLowerCase(),target=t.phrase.replaceAll(",","").replace(/\s+/g," ").trim().toLowerCase(),m=s.querySelector("#m");m.className=v===target?"message good":"message bad";m.textContent=v===target?"Правильно.":"Неправильно.";if(v===target)setTimeout(()=>success(el,q),450)}
}
function completed(){app.innerHTML=`<main class="screen"><section class="card final"><div class="heart">❤️</div><h1>Квест завершён</h1><p>Ты прошла всё приключение.</p><button class="secondary" id="r">Начать квест заново</button></section></main>`;document.getElementById("r").onclick=()=>{localStorage.removeItem("quest_current");localStorage.removeItem("quest_completed");location.reload()}}
render();