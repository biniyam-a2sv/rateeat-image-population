"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import Image from 'next/image';
import { useSearchParams } from "next/dist/client/components/navigation";
import { Button } from "@/components/ui/button";


export function InputFile() {
    const [selectedFiles, setSelectedFiles] = useState<(string | ArrayBuffer)[]>([]);

    const handleFileChange = (e: any) => {
        const rawFiles = e.target.files;
        const newSelectedFiles = [];

        for (const file of rawFiles) {
            const reader = new FileReader();
            reader.onloadend = () => {
                newSelectedFiles.push(reader.result);
                setSelectedFiles((prevFiles) => [...prevFiles, reader.result!]); // Use functional update for async handling
            };
            reader.readAsDataURL(file); // Trigger reading for each file
        }

        console.log(`The selected files are ${selectedFiles}`);
    };

    async function uploadItemImage(itemId: string) {
        const baseURL = "https://rateeat-backend-ij7jnmwh2q-zf.a.run.app/api/v1";

        // Ensure data is an array before mapping

        const formData = new FormData();
        formData.append('itemId', itemId);
        formData.append('itemImages', selectedFiles as any);
        const res = await fetch(`${baseURL}/api/uploadItemImage`, {
            method: 'POST',
            body: formData
        })
        if (!res.ok) {
            throw new Error("API response is not an array");
        }
        const data = await res.json();
        console.log(data);

    }




    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" onChange={handleFileChange} multiple />

            {selectedFiles.map((file: any) => (
                <div key={file.toString()} className="mt-2 flex  items-center justify-center gap-4">
                    <Image
                        key={file.toString()}
                        src={file}
                        alt="Preview"
                        className="rounded-md"
                        width={100}
                        height={100}
                    />
                </div>
            ))}
            <Button onClick={() => uploadItemImage}>Add Image</Button>
        </div>
    );
}


// eslint-disable-next-line @next/next/no-async-client-component
export default async function ItemDetailPage() {


    const [searchParams] = useSearchParams();
    const itemId = searchParams.at(1) || '';

    return (
        <div>
            <h1 className="mb-10">Item detail page</h1>
            <InputFile />

        </div>
    )
}









