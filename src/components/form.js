import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react';

export default function Form({ form }) {

    // const [form, setForm] = useState("");
    // const changeSelected = (form) => {
    //     setForm(form)
    // };
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