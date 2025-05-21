'use client';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, SunMoonIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DropdownMenu, 
    DropdownMenuLabel, 
    DropdownMenuTrigger, 
    DropdownMenuSeparator, 
    DropdownMenuContent,  
    DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Modetoggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme , setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;  

    return ( <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className='focus-visible:ring-0 focus-visible:ring-offset-0 '>
                {theme === 'system' ? (<SunMoonIcon/>):
                theme === 'dark' ? (<MoonIcon />) :
                (<SunIcon />)
                }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
                checked={theme === 'system'}
                onCheckedChange={() => setTheme('system')}>
                    system
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
                checked={theme === 'dark'}
                onCheckedChange={() => setTheme('dark')}>
                    Dark
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
                checked={theme === 'light'}
                onCheckedChange={() => setTheme('light')}>
                    Light
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu> );
}
 
export default Modetoggle;