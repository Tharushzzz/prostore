'use client';
import { APP_NAME } from '@/lib/constant';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { use } from 'react';


const NotFoundPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <Image src="/images/logo.svg" alt={`${APP_NAME} logo`} width={48} height={48}/>
        <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
            <h1 className='text-3xl font-bold mb-4'>Not Found</h1>
            <p className='text-destructive'>Cound Not Find Requested page </p>
            <Button veriant="outline" className='mt-4 ml-2' onClick={ () => (window.location.href='/')} >
                Go to Home
            </Button>
        </div>
    </div> );
}
 
export default NotFoundPage;