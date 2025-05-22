import { EllipsisVertical, ShoppingCartIcon, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Modetoggle from '@/components/shared/header/mode-toggle';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";



const Menu = () => {
    return ( <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w-xs gap-1">
            <Modetoggle/>
                <Button asChild variant='ghost'>
                    <Link href='/cart'>
                        <ShoppingCartIcon/> Cart
                    </Link>    
                </Button>
                <Button asChild>
                    <Link href='/sign-in'>
                        <UserIcon/> Sign-in
                    </Link>    
                </Button>
        </nav>
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger className='align-middle'>
                    <EllipsisVertical/>
                </SheetTrigger>
                <SheetContent className='flex felx-col items-start'>
                    <SheetTitle className='mt-6 ml-3'>Menu</SheetTitle>
                    <span className='ml-2'> <Modetoggle /> </span>
                    <Button className='ml-3' asChild variant='ghost'>
                        <Link href='/cart'>
                            <ShoppingCartIcon/> Cart
                        </Link>
                    </Button>
                    <Button className='ml-3' asChild >
                        <Link href='/sign-in'>
                            <UserIcon/> Sign-in
                        </Link>
                    </Button>
                    <SheetDescription></SheetDescription>
                </SheetContent>
            </Sheet>
        </nav>
    </div> );
}
 
export default Menu;