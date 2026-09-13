import fs from 'node:fs';
import path from 'node:path';

const out = path.resolve('playbook-artifacts');
fs.mkdirSync(out, { recursive: true });

const C = {
  green: '#34D399', cyan: '#22D3EE', yellow: '#F5C518',
  purple: '#A855F7', orange: '#F97316', red: '#F04848'
};

function esc(s) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function frame(title, subtitle, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">${esc(title)}</title>
  <desc id="desc">${esc(subtitle)}</desc>
  <style>
    .title{font:700 48px Inter,Arial,sans-serif;letter-spacing:-.7px;fill:#F7F7F5}
    .sub{font:400 26px Inter,Arial,sans-serif;fill:#B8B8B4}
    .label{font:600 24px Inter,Arial,sans-serif;fill:#F7F7F5}
    .small{font:500 19px Inter,Arial,sans-serif;fill:#B8B8B4}
    .tiny{font:600 16px Inter,Arial,sans-serif;letter-spacing:1.4px;fill:#B8B8B4}
    .guide{stroke:#777772;stroke-opacity:.48;fill:none}
    .soft{fill:none;stroke-linecap:round;stroke-linejoin:round}
    @media (prefers-color-scheme:light){
      .title,.label{fill:#191919}.sub,.small,.tiny{fill:#5F5F5B}.guide{stroke:#A7A7A2}
    }
  </style>
  <text class="title" x="80" y="78">${esc(title)}</text>
  <text class="sub" x="80" y="122">${esc(subtitle)}</text>
  <line class="guide" x1="80" y1="158" x2="1520" y2="158" stroke-width="2"/>
  ${body}
</svg>`;
}

function write(name, title, subtitle, body) {
  fs.writeFileSync(path.join(out, name), frame(title, subtitle, body));
}

write('00-reading-journey.svg', 'The writer journey', 'One clear path from a live signal to a better next decision.', `
  <defs><marker id="a" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto"><path d="M1 1l10 5-10 5z" fill="${C.cyan}"/></marker></defs>
  <path d="M110 700 C260 310 440 720 590 390 S920 245 1080 515 S1320 690 1490 285" class="soft" stroke="${C.cyan}" stroke-width="12" marker-end="url(#a)"/>
  <path d="M110 700 C260 310 440 720 590 390 S920 245 1080 515 S1320 690 1490 285" class="soft" stroke="${C.purple}" stroke-opacity=".18" stroke-width="34"/>
  ${[[150,590,'LEARN',C.green],[350,485,'LOAD',C.yellow],[570,430,'FIND',C.orange],[775,320,'PROVE',C.green],[970,405,'WRITE',C.cyan],[1165,585,'PUBLISH',C.purple],[1390,390,'IMPROVE',C.green]].map(([x,y,t,c],i)=>`<circle cx="${x}" cy="${y}" r="28" fill="${c}"/><text class="tiny" x="${x}" y="${y+62}" text-anchor="middle">${i}. ${t}</text>`).join('')}
  <path d="M116 744c390 55 804 30 1290-8" class="guide" stroke-width="2" stroke-dasharray="8 14"/>
  <text class="small" x="112" y="794">Read in order. Each chapter hands one finished item to the next.</text>
`);

write('01-north-star.svg', 'The four-part job', 'Move fast only when truth, value, and trust move with you.', `
  <circle cx="800" cy="515" r="245" class="soft" stroke="${C.purple}" stroke-width="5" stroke-opacity=".55"/>
  <circle cx="800" cy="515" r="72" fill="${C.cyan}" fill-opacity=".18" stroke="${C.cyan}" stroke-width="5"/>
  <path d="M800 236l34 190 190 34-190 34-34 190-34-190-190-34 190-34z" fill="${C.cyan}" fill-opacity=".18" stroke="${C.cyan}" stroke-width="5"/>
  <text class="label" x="800" y="506" text-anchor="middle">GOOD</text><text class="label" x="800" y="538" text-anchor="middle">POST</text>
  <text class="label" x="800" y="220" text-anchor="middle" fill="${C.green}">TRUTH</text>
  <text class="label" x="1100" y="524" fill="${C.yellow}">VALUE</text>
  <text class="label" x="800" y="815" text-anchor="middle" fill="${C.purple}">TRUST</text>
  <text class="label" x="350" y="524" fill="${C.orange}">SPEED</text>
  <path d="M800 275v100M1028 515h-100M800 655v100M572 515h100" class="soft" stroke="#9C9C98" stroke-width="3"/>
  <text class="small" x="800" y="740" text-anchor="middle">If one point breaks, the post stops.</text>
`);

write('02-brand-prism.svg', 'The brand prism', 'Facts may travel across accounts. Wording, angle, and media must be rebuilt.', `
  <defs><linearGradient id="beam" x1="0" x2="1"><stop stop-color="${C.green}"/><stop offset="1" stop-color="${C.cyan}"/></linearGradient></defs>
  <path d="M95 480h480" stroke="url(#beam)" stroke-width="28" stroke-linecap="round"/>
  <text class="label" x="95" y="435">SHARED EVIDENCE</text>
  <path d="M575 290l260 190-260 190z" fill="${C.cyan}" fill-opacity=".08" stroke="${C.cyan}" stroke-width="6"/>
  <text class="label" x="660" y="490" text-anchor="middle">PROFILE</text>
  <path d="M835 480L1495 285" stroke="${C.green}" stroke-width="16" stroke-linecap="round"/>
  <path d="M835 480L1495 480" stroke="${C.yellow}" stroke-width="16" stroke-linecap="round"/>
  <path d="M835 480L1495 675" stroke="${C.purple}" stroke-width="16" stroke-linecap="round"/>
  <text class="label" x="1180" y="270" fill="${C.green}">COINVO</text><text class="small" x="1180" y="305">Fast consequence</text>
  <text class="label" x="1180" y="462" fill="${C.yellow}">TRADING</text><text class="small" x="1180" y="514">Price and position</text>
  <text class="label" x="1180" y="660" fill="${C.purple}">NEW BRAND</text><text class="small" x="1180" y="700">Its own promise</text>
  <text class="small" x="565" y="760">Same source. Different audience. Independent thesis. New expression.</text>
`);

write('03-x-orbits.svg', 'The four X systems', 'Do not treat ranking, safety, rewards, and authenticity as one algorithm.', `
  <ellipse cx="800" cy="520" rx="610" ry="255" class="guide" stroke-width="3"/>
  <ellipse cx="800" cy="520" rx="455" ry="190" class="guide" stroke-width="3" transform="rotate(18 800 520)"/>
  <ellipse cx="800" cy="520" rx="310" ry="130" class="guide" stroke-width="3" transform="rotate(-20 800 520)"/>
  <circle cx="800" cy="520" r="88" fill="${C.cyan}" fill-opacity=".14" stroke="${C.cyan}" stroke-width="5"/>
  <text class="label" x="800" y="512" text-anchor="middle">ONE</text><text class="label" x="800" y="545" text-anchor="middle">POST</text>
  <circle cx="190" cy="520" r="34" fill="${C.green}"/><text class="label" x="110" y="465">RANKING</text>
  <circle cx="1194" cy="358" r="34" fill="${C.red}"/><text class="label" x="1235" y="350">SAFETY</text>
  <circle cx="1080" cy="660" r="34" fill="${C.yellow}"/><text class="label" x="1125" y="700">REWARDS</text>
  <circle cx="516" cy="395" r="34" fill="${C.purple}"/><text class="label" x="345" y="370">AUTHENTICITY</text>
  <text class="small" x="800" y="825" text-anchor="middle">A reach change can come from a different orbit. Diagnose before changing the rule.</text>
`);

write('04-cockpit-check.svg', 'The ready cockpit', 'Open the right tools before speed matters.', `
  <path d="M210 720Q800 210 1390 720" class="soft" stroke="${C.cyan}" stroke-width="6"/>
  ${[[370,610,'PROFILE',C.purple],[590,445,'SOURCES',C.green],[800,385,'QUEUE',C.yellow],[1010,445,'COMPOSE',C.orange],[1230,610,'INCIDENT',C.red]].map(([x,y,t,c])=>`<path d="M${x-75} ${y+45}A88 88 0 0 1 ${x+75} ${y+45}" class="soft" stroke="${c}" stroke-width="10"/><line x1="${x}" y1="${y+45}" x2="${x+46}" y2="${y-5}" stroke="${c}" stroke-width="7" stroke-linecap="round"/><circle cx="${x}" cy="${y+45}" r="10" fill="${c}"/><text class="tiny" x="${x}" y="${y+94}" text-anchor="middle">${t}</text>`).join('')}
  <path d="M260 740h1080" class="guide" stroke-width="3"/>
  <circle cx="800" cy="740" r="18" fill="${C.green}"/><text class="label" x="835" y="750">READY TO SCAN</text>
`);

write('05-signal-radar.svg', 'The signal radar', 'Scan for change. Do not scroll for entertainment.', `
  <defs><radialGradient id="sweep"><stop stop-color="${C.green}" stop-opacity=".32"/><stop offset="1" stop-color="${C.green}" stop-opacity="0"/></radialGradient></defs>
  <circle cx="700" cy="520" r="300" fill="none" stroke="${C.cyan}" stroke-opacity=".3" stroke-width="3"/>
  <circle cx="700" cy="520" r="205" fill="none" stroke="${C.cyan}" stroke-opacity=".3" stroke-width="3"/>
  <circle cx="700" cy="520" r="108" fill="none" stroke="${C.cyan}" stroke-opacity=".3" stroke-width="3"/>
  <path d="M700 520L700 220A300 300 0 0 1 946 350Z" fill="url(#sweep)"/>
  <line x1="700" y1="520" x2="946" y2="350" stroke="${C.green}" stroke-width="6"/>
  ${[[548,390,C.yellow,'NUMBER'],[865,510,C.orange,'AUTHORITY'],[620,665,C.purple,'CHANGE'],[780,330,C.red,'CONFLICT']].map(([x,y,c,t])=>`<circle cx="${x}" cy="${y}" r="16" fill="${c}"/><circle cx="${x}" cy="${y}" r="30" fill="none" stroke="${c}" stroke-opacity=".35" stroke-width="4"/><text class="tiny" x="${x+42}" y="${y+7}">${t}</text>`).join('')}
  <path d="M1080 300v430" class="guide" stroke-width="2"/>
  <text class="label" x="1140" y="355">LOOK FOR</text>
  <text class="small" x="1140" y="410">A real change</text><text class="small" x="1140" y="455">A known source</text><text class="small" x="1140" y="500">A clear number</text><text class="small" x="1140" y="545">A fresh conflict</text><text class="small" x="1140" y="590">A direct audience effect</text>
  <text class="label" x="1140" y="685" fill="${C.red}">CANDIDATE ≠ POST</text>
`);

write('06-truth-filter.svg', 'The truth filter', 'A claim gets narrower and stronger as weak evidence falls away.', `
  <path d="M300 235h1000l-250 245v220L550 790V480z" fill="${C.cyan}" fill-opacity=".06" stroke="${C.cyan}" stroke-width="6" stroke-linejoin="round"/>
  <path d="M360 315h880M455 405h690M550 495h500" stroke="#858581" stroke-opacity=".55" stroke-width="4" stroke-dasharray="14 16"/>
  ${[[410,275,C.red,'RUMOR'],[650,275,C.orange,'SCREENSHOT'],[900,275,C.yellow,'AGGREGATOR'],[1160,275,C.green,'PRIMARY']].map(([x,y,c,t])=>`<circle cx="${x}" cy="${y}" r="17" fill="${c}"/><text class="tiny" x="${x}" y="${y-30}" text-anchor="middle">${t}</text>`).join('')}
  <path d="M800 710v90" stroke="${C.green}" stroke-width="12" stroke-linecap="round"/>
  <circle cx="800" cy="810" r="34" fill="${C.green}"/>
  <text class="label" x="850" y="819">EXACT CLAIM</text>
  <text class="small" x="800" y="555" text-anchor="middle">actor · action · number · time · place · certainty</text>
`);

write('07-value-compass.svg', 'The value compass', 'Choose who supplies the value before choosing the format.', `
  <circle cx="800" cy="520" r="275" fill="none" stroke="${C.purple}" stroke-width="5" stroke-opacity=".55"/>
  <path d="M800 230l72 220 220 70-220 72-72 220-72-220-220-72 220-70z" fill="${C.purple}" fill-opacity=".10" stroke="${C.purple}" stroke-width="5"/>
  <circle cx="800" cy="520" r="58" fill="${C.cyan}"/><text class="label" x="800" y="529" text-anchor="middle">WHY</text>
  <text class="label" x="800" y="205" text-anchor="middle" fill="${C.green}">CREATE</text>
  <text class="label" x="1125" y="528" fill="${C.cyan}">SYNTHESIZE</text>
  <text class="label" x="800" y="850" text-anchor="middle" fill="${C.yellow}">EXTEND</text>
  <text class="label" x="290" y="528" fill="${C.orange}">ATTRIBUTE</text>
  <text class="small" x="800" y="620" text-anchor="middle">If our work is not the main value, keep the source attached.</text>
`);

write('08-thesis-tree.svg', 'The thesis tree', 'Strong writing grows from proof. Packaging cannot replace the roots.', `
  <path d="M790 770C780 640 775 555 800 410M800 520C710 470 640 410 585 320M805 510C900 455 980 390 1040 300M800 430C770 350 760 285 780 220" class="soft" stroke="${C.orange}" stroke-width="28"/>
  <path d="M800 740C690 785 575 805 445 800M805 735C930 775 1060 800 1200 790M790 700C650 690 535 650 420 600M812 685C950 665 1080 615 1210 560" class="soft" stroke="${C.yellow}" stroke-width="10"/>
  ${[[420,600,'SOURCE',C.green],[445,800,'CONTEXT',C.cyan],[1200,790,'RIGHTS',C.purple],[1210,560,'RISK',C.red]].map(([x,y,t,c])=>`<circle cx="${x}" cy="${y}" r="28" fill="${c}"/><text class="tiny" x="${x}" y="${y+58}" text-anchor="middle">${t}</text>`).join('')}
  ${[[585,320,'CONSEQUENCE',C.green],[780,220,'THESIS',C.cyan],[1040,300,'VOICE',C.purple]].map(([x,y,t,c])=>`<circle cx="${x}" cy="${y}" r="52" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="5"/><text class="tiny" x="${x}" y="${y+6}" text-anchor="middle">${t}</text>`).join('')}
  <text class="label" x="800" y="845" text-anchor="middle">ROOTS BEFORE HOOKS</text>
`);

write('09-publish-airlock.svg', 'The publish airlock', 'Every gate closes before one human opens the final door.', `
  ${[[300,C.red],[245,C.orange],[190,C.yellow],[135,C.purple],[80,C.green]].map(([r,c],i)=>`<circle cx="800" cy="520" r="${r}" fill="none" stroke="${c}" stroke-width="${12-i}" stroke-dasharray="${i%2?'22 10':'none'}"/>`).join('')}
  ${[[300,285,C.red,'TRUTH'],[245,375,C.orange,'VALUE'],[190,465,C.yellow,'RIGHTS'],[135,555,C.purple,'MATCH'],[80,645,C.green,'HUMAN']].map(([r,y,c,t])=>`<path d="M${800+r} 520Q1115 520 1150 ${y}" fill="none" stroke="${c}" stroke-width="3" stroke-opacity=".75"/><circle cx="1150" cy="${y}" r="7" fill="${c}"/><text class="tiny" x="1175" y="${y+6}">${t}</text>`).join('')}
  <circle cx="800" cy="520" r="30" fill="${C.cyan}"/>
  <path d="M800 190v-58" stroke="${C.cyan}" stroke-width="10" stroke-linecap="round"/>
  <path d="M770 150l30-36 30 36" fill="none" stroke="${C.cyan}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <text class="label" x="800" y="842" text-anchor="middle">NO PASS, NO POST</text>
`);

write('10-response-ecg.svg', 'The live signal', 'Watch separate health signs. Do not react to one vanity number.', `
  <path d="M90 525h210l55-2 35-145 65 285 70-230 55 92h125l45-70 50 70h130l35-170 65 330 70-210 55 50h260" fill="none" stroke="${C.cyan}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  ${[[320,523,'REACH',C.green],[455,663,'TRUST',C.red],[570,433,'REPLIES',C.purple],[880,455,'SHARES',C.yellow],[1120,685,'RISK',C.orange],[1300,525,'ACTION',C.cyan]].map(([x,y,t,c])=>`<circle cx="${x}" cy="${y}" r="16" fill="${c}"/><text class="tiny" x="${x}" y="${y+46}" text-anchor="middle">${t}</text>`).join('')}
  <text class="label" x="800" y="805" text-anchor="middle">OBSERVE FIRST · ACT FOR READER VALUE OR SAFETY</text>
`);

write('11-learning-spiral.svg', 'The learning spiral', 'Evidence becomes a rule only after a clean test survives review.', `
  <path d="M800 510c0-45 55-70 95-45 58 36 44 132-20 174-92 60-224 10-260-102-46-145 66-294 226-318 205-31 385 130 405 342 25 267-189 484-453 483" fill="none" stroke="${C.purple}" stroke-width="11" stroke-linecap="round"/>
  ${[[804,510,'OBSERVE',C.green],[938,604,'QUESTION',C.cyan],[682,690,'TEST',C.yellow],[544,420,'COMPARE',C.orange],[910,235,'DECIDE',C.red],[1230,560,'VERSION',C.purple]].map(([x,y,t,c])=>`<circle cx="${x}" cy="${y}" r="26" fill="${c}"/><text class="tiny" x="${x+38}" y="${y+6}">${t}</text>`).join('')}
  <text class="small" x="800" y="822" text-anchor="middle">One post gives a clue. Repeated evidence plus a test may change the system.</text>
`);

write('12-incident-firebreak.svg', 'The firebreak', 'Stop spread, keep evidence, name one owner, then decide.', `
  <path d="M770 720C600 610 650 500 755 430c-15 95 85 105 70 205 90-70 120-180 70-285 165 115 245 310 125 450-95 110-315 105-420-15" fill="${C.red}" fill-opacity=".16" stroke="${C.red}" stroke-width="7"/>
  <path d="M400 770c-90-210-35-440 145-575M1200 770c90-210 35-440-145-575" fill="none" stroke="${C.green}" stroke-width="16" stroke-linecap="round"/>
  <path d="M340 770h920" stroke="${C.green}" stroke-width="16" stroke-linecap="round"/>
  <text class="label" x="295" y="235" fill="${C.green}">FREEZE</text><text class="label" x="1170" y="235" fill="${C.green}">OWNER</text>
  <text class="label" x="800" y="842" text-anchor="middle">PRESERVE BEFORE YOU DELETE, ARGUE, OR AMPLIFY</text>
`);

write('13-human-exoskeleton.svg', 'The human exoskeleton', 'AI carries repeatable weight. A human keeps judgment and authorship.', `
  <circle cx="800" cy="345" r="82" fill="none" stroke="${C.cyan}" stroke-width="9"/>
  <path d="M800 430v220M800 485L640 570M800 485l160 85M800 650L690 790M800 650l110 140" class="soft" stroke="${C.cyan}" stroke-width="12"/>
  <path d="M620 290C480 390 465 655 605 780M980 290c140 100 155 365 15 490" fill="none" stroke="${C.purple}" stroke-width="12" stroke-dasharray="22 16" stroke-linecap="round"/>
  <path d="M520 420l85 20M1080 420l-85 20M505 615l95-15M1095 615l-95-15" stroke="${C.green}" stroke-width="8" stroke-linecap="round"/>
  <text class="tiny" x="400" y="398">SEARCH</text><text class="tiny" x="1120" y="398">CHECK</text><text class="tiny" x="370" y="635">MEASURE</text><text class="tiny" x="1120" y="635">RECORD</text>
  <text class="label" x="800" y="348" text-anchor="middle">HUMAN</text>
  <text class="small" x="800" y="842" text-anchor="middle">Thesis · final words · sensitive calls · publish action</text>
`);

console.log(`Wrote ${fs.readdirSync(out).filter(f => f.endsWith('.svg')).length} SVG files to ${out}`);
