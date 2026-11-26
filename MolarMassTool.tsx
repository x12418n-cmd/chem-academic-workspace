import { useState } from 'react';
import { Atom, Calculator, RotateCcw } from 'lucide-react';
import { calculateMolarMass, ELEMENTS } from '../utils/chemEngine';
import ChemEquation from './ChemEquation';

export default function MolarMassTool() {
  const [formula,setFormula]=useState('CuSO4.5H2O');
  const [result,setResult]=useState<ReturnType<typeof calculateMolarMass>|null>(null);
  const [error,setError]=useState('');
  const run=()=>{ try { setResult(calculateMolarMass(formula)); setError(''); } catch(e){setError(e instanceof Error?e.message:'Không phân tích được công thức.');setResult(null);} };
  return <div className="space-y-5 animate-in">
    <div className="flex items-center gap-3"><div className="h-11 w-11 rounded-2xl bg-blue-50 text-blue-700 grid place-items-center"><Atom size={21}/></div><div><h2 className="font-bold text-lg">Phân tử khối & thành phần nguyên tố</h2><p className="text-sm muted">Phân tích đệ quy ngoặc tròn, ngoặc vuông và tinh thể ngậm nước.</p></div></div>
    <div className="panel rounded-2xl p-5">
      <label className="block text-xs font-bold tracking-wide muted uppercase mb-2">Công thức hóa học</label>
      <div className="flex gap-2"><input value={formula} onChange={e=>setFormula(e.target.value)} onKeyDown={e=>e.key==='Enter'&&run()} className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono text-sm outline-none focus:border-blue-400 dark:bg-slate-900 dark:border-slate-700" placeholder="Ví dụ: K4[Fe(CN)6].3H2O"/><button onClick={run} className="rounded-xl bg-blue-600 px-4 text-white text-sm font-semibold hover:bg-blue-700"><Calculator size={16} className="inline mr-2"/>Tính</button><button title="Đặt lại" onClick={()=>{setFormula('CuSO4.5H2O');setResult(null);setError('')}} className="rounded-xl border border-slate-200 px-3 muted hover:bg-slate-50 dark:border-slate-700"><RotateCcw size={16}/></button></div>
      <div className="flex flex-wrap gap-2 mt-3">{['H2O','CH4','C6H12O6','[Co(NH3)6]Cl3','K4[Fe(CN)6].3H2O'].map(x=><button key={x} onClick={()=>setFormula(x)} className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-mono muted hover:text-blue-600">{x}</button>)}</div>
      {error&&<p className="mt-3 rounded-xl bg-rose-50 text-rose-700 px-3 py-2 text-sm">{error}</p>}
    </div>
    {result&&<>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="panel p-4 rounded-2xl"><p className="muted text-xs">Phân tử khối / khối lượng mol</p><p className="text-sm font-semibold muted mt-1"><ChemEquation text={formula} formula/></p><p className="text-2xl font-extrabold display-font mt-1">{result.molarMass.toFixed(4)} <span className="text-sm font-medium muted">g·mol⁻¹</span></p></div>
        <div className="panel p-4 rounded-2xl"><p className="muted text-xs">Số nguyên tố</p><p className="text-2xl font-extrabold display-font mt-1">{result.rows.length}</p></div>
        <div className="panel p-4 rounded-2xl"><p className="muted text-xs">Tổng số nguyên tử</p><p className="text-2xl font-extrabold display-font mt-1">{result.rows.reduce((s,r)=>s+r.count,0)}</p></div>
      </div>
      <div className="panel rounded-2xl p-5"><h3 className="font-bold mb-4">Thành phần khối lượng</h3><div className="overflow-x-auto"><table className="w-full min-w-[520px] text-sm"><thead><tr className="text-left muted border-b border-slate-100 dark:border-slate-700"><th className="py-2">Nguyên tố</th><th className="py-2 text-right">Số nguyên tử</th><th className="py-2 text-right">Aᵣ (g·mol⁻¹)</th><th className="py-2 text-right">Khối lượng</th><th className="py-2 text-right">%m</th></tr></thead><tbody>{result.rows.map(row=><tr key={row.element} className="border-b border-slate-50 dark:border-slate-800"><td className="py-3 font-bold">{row.element} <span className="muted font-normal">{ELEMENTS[row.element].name}</span></td><td className="py-3 text-right tabular-nums">{row.count}</td><td className="py-3 text-right tabular-nums">{row.atomicMass.toFixed(4)}</td><td className="py-3 text-right tabular-nums">{row.totalMass.toFixed(4)}</td><td className="py-3 text-right tabular-nums font-semibold">{row.percentage.toFixed(2)}%</td></tr>)}</tbody></table></div><p className="muted text-xs mt-4">Dùng giá trị nguyên tử khối chuẩn khi có; với nguyên tố phóng xạ/siêu nặng không có trọng lượng nguyên tử chuẩn, dùng số khối đồng vị đại diện được ghi trong bảng dữ liệu của ứng dụng.</p></div>
    </>}
    {!result&&!error&&<div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-10 text-center muted"><Atom size={28} className="mx-auto mb-2 opacity-40"/><p className="font-semibold">Chưa có kết quả</p><p className="text-sm mt-1">Nhập công thức và chọn “Tính” để xem bảng thành phần.</p></div>}
  </div>;
}
