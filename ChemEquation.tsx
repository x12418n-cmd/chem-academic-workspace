import katex from 'katex';
import { useMemo } from 'react';
import { equationToTex, formulaToTex } from '../utils/chemFormat';
export default function ChemEquation({text,formula=false,display=false,className=''}:{text:string;formula?:boolean;display?:boolean;className?:string}){
 const html=useMemo(()=>{try{return katex.renderToString(formula?formulaToTex(text):equationToTex(text),{displayMode:display,throwOnError:false,strict:'ignore'})}catch{return ''}},[text,formula,display]);
 return html?<span className={className} dangerouslySetInnerHTML={{__html:html}}/>:<span className={`font-mono ${className}`}>{text}</span>;
}
