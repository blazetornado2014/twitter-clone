import useUserInfo from "@/hooks/useUserInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UsernameForm(){
    const {userInfo, status} = useUserInfo();
    const [username, setUsername] = useState('');
    const router = useRouter();


    useEffect( () => {
        if (status === 'loading') {
            return;
        }
        if (username === '') {
            const defaultUsername = userInfo?.email?.split('@')[0];
            setUsername(defaultUsername);
        }
    }, [status])

    async function handleFormSubmit(e) {
        e.preventDefault();
        await fetch('/api/users', {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({username}),
        });
        router.reload();
    }

    if (status === 'loading') {
        return ''
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="text-center" onSubmit={handleFormSubmit}>
                <h1 className="text-xl mb-2">Enter your username</h1>
                <input type = "text" 
                className="block mb-2 bg-twitterDarkGray px-3 py-1 rounded-full" 
                placeholder={'username'} value={username} onChange={e => 
                {setUsername(e.target.value)}}/>
                <button className="block bg-twitterBlue w-full rounded-full py-1">Continue</button>
            </form>
        </div>
    );
}