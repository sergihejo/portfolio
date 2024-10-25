import React, {useEffect, useState} from 'react';
import SocialButton from './socialbutton';

export default function Intro() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                    process.env.REACT_APP_BACKEND_URL + '/users/1'
                );
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="mt-20 w-2/3 mb-20 flex items-center flex-col md:flex-row justify-center">
            <img
                src={user.image_url}
                alt="Imagen de perfil"
                className="w-2/3 md:w-1/3 h-auto md:mr-4 md:mt-4 mb-12 rounded-full order-1 md:order-2"
            />
            <div className="md:mr-16 order-2 md:order-1">
                <h3 className="text-4xl font-bold">¡Hola! Soy {user.name}</h3>
                <p className="text-xl my-6 text-justify"
                   dangerouslySetInnerHTML={{__html: user.description?.replace(/\n/g, '<br/>')}}></p>

                {user.github_url &&
                    <SocialButton
                        link={user.github_url}
                        icon="fa-brands fa-github pr-2"
                        alt="GitHub"
                        text="GitHub"
                    />
                }

                {user.linkedin_url &&
                    <SocialButton
                        link={user.linkedin_url}
                        icon="fa-brands fa-linkedin-in pr-2"
                        alt="Linkedin"
                        text="LinkedIn"
                    />
                }

                {user.twitter_url &&
                    <SocialButton
                        link={user.twitter_url}
                        icon="fa-brands fa-twitter pr-2"
                        alt="Twitter"
                        text="Twitter"
                    />
                }
            </div>
        </div>
    );
}
