import { useState } from 'react';
import { Calculator, FlaskConical, Scale } from 'lucide-react';
import MolarMassTool from './MolarMassTool';
import EquationBalancerTool from './EquationBalancerTool';
import SolutionNernstTool from './SolutionNernstTool';

const tools=[{id:'mass',label:'Phân tử khối',icon:<Calculator size={15}/>},{id:'balance',label:'Cân bằng phản ứng',icon:<Scale size={15}/>},{id:'solution',label:'Dung dịch & Nernst',icon:<FlaskConical size={15}/>}];
export default function ChemTools(){const [active,setActive]=useState('mass');return <div className="space-y-5"><div className="flex items-center gap-3"><div className="h-11 w-11 rounded-2xl bg-sky-50 text-sky-700 grid place-items-center"><Calculator size={21}/></div><div><h2 className="font-bold text-lg">Chem-Tools · Bộ công cụ tính toán</h2><p className="text-sm muted">Các tiện ích định lượng và xử lý phương trình hóa học.</p></div></div><div className="panel rounded-2xl p-2 flex flex-wrap gap-2">{tools.map(t=><button key={t.id} onClick={()=>setActive(t.id)} className={`rounded-xl px-4 py-2.5 text-sm font-semibold flex gap-2 items-center ${active===t.id?'bg-blue-600 text-white':'muted hover:bg-slate-100 dark:hover:bg-slate-800'}`}>{t.icon}{t.label}</button>)}</div>{active==='mass'?<MolarMassTool/>:active==='balance'?<EquationBalancerTool/>:<SolutionNernstTool/>}</div>}
