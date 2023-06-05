import React from "react";
import axios from "axios";

function DiscordService(clearForm: string | any) {
  const Send = async (data: string | any) => {
    const body = {
      content: "Message Received",
      tts: false,
      color: "white",
      embeds: [
        {
          title: "lee ai nmralzinha",
          description: data,
        },
      ],
    };

    try {
      const data = await axios.post(
        "https://discordapp.com/api/webhooks/1113561678689345637/sm7gTwM0MKzWna1cAK_kdMPKKQ6YlhjvwX2cZryVoVcALs0yYI2h5MDHI5EOr_lLV5dY",
        body
      );
      console.log(data);
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    Send,
  };
}

export default DiscordService;