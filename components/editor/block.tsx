/* eslint-disable @next/next/no-img-element */
import { EditorJSBlock, EditorJSHeaderData, EditorJSImageData, EditorJSListData } from "@/typings/editorjs";
import React, { JSX } from "react";

const Block: React.FC<EditorJSBlock> = (block) => {
    if (block.type === 'paragraph') {
        const data = block.data as { text: string };
        return (
            <p className="mb-4 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.text || '' }} />
        );
    }
    if (block.type === 'header') {
        const data = block.data as EditorJSHeaderData;
        const HeaderTag = `h${data.level || 2}` as keyof JSX.IntrinsicElements;
        return <HeaderTag className={`font-bold mb-3 mt-6 ${data.level === 1 ? 'text-3xl' : data.level === 2 ? 'text-xl' : 'text-lg'}`} dangerouslySetInnerHTML={{ __html: data.text || '' }}></HeaderTag>;
    }
    if (block.type === 'image') {
        const data = block.data as EditorJSImageData;
        return (
            <figure className={`mb-6 ${data.align === 'center' ? 'text-center' : data.align === 'right' ? 'text-right' : ''}`}>
                <img src={data.file?.url} alt={data.caption || ''} className="max-w-full h-auto inline-block" />
                {data.caption && <figcaption className="text-sm text-gray-600 mt-2">{data.caption}</figcaption>}
            </figure>
        );
    }
    if (block.type === 'list') {
        const data = block.data as EditorJSListData;
        return (
            <ul className="list-disc list-inside mb-4 ml-4">
                {data.items?.map((item, i) => (
                    <li key={i} className="mb-1" dangerouslySetInnerHTML={{__html: item.content || ''}}></li>
                ))}
            </ul>
        );
    }
    if (block.type === 'quote') {
        const data = block.data as { text: string; caption?: string; alignment?: 'left' | 'center' | 'right' };
        return <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">{data.text}</blockquote>;
    }
    if (block.type === 'code') {
        const data = block.data as { code: string };
        return <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4"><code>{data.code}</code></pre>;
    }

    return <React.Fragment />;
}

export default Block;