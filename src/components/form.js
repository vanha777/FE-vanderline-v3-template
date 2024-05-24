import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react';
import { invoke } from "@tauri-apps/api/core";
export default function Form({ form }) {

    // const [form, setForm] = useState("");
    // const changeSelected = (form) => {
    //     setForm(form)
    // };
    useEffect(async () => {
        setGreetMsg(await invoke("greet", "Copy Coder"));
    }, []);
    console.log("form page", form);
    return (
        <>
            {form === "form" &&
                <h1>{form}</h1>
            }
            {form === "Website" &&
                <h1>{form}</h1>
            }

            {form === "Contact" &&
                <h1>{form}</h1>
            }

            {form === "Phone Number" &&
                <h1>{form}</h1>
            }

            {form === "SMS" &&
                <h1>{form}</h1>
            }

            {form === "Address" &&
                <h1>{form}</h1>
            }

            {form === "Qside" &&
                <h1>{form}</h1>
            }

            {form === "Tiktok" &&
                <h1>{form}</h1>
            }

            {form === "Instargram" &&
                <h1>{form}</h1>
            }

            {form === "Facebook" &&
                <h1>{form}</h1>
            }

            {form === "Twitter" &&
                <h1>{form}</h1>
            }

        </>
    );
}