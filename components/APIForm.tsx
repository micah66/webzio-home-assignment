'use client';

import { useUserApiContext } from '@/context/apiContext';
import { useState } from 'react';

export default function APIForm() {
  const [apiKey, setApiKey] = useState<string>();
  const { setUserApiKey } = useUserApiContext();
  return (
    <form
      action={(data) => {
        const userApiKey = data.get('userApiKey');
        if (userApiKey) {
          setUserApiKey(userApiKey.toString());
        }
      }}
    >
      <input
        className="rounded py-2 text-black"
        type="text"
        name="userApiKey"
        placeholder="Enter API key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button className="rounded bg-slate-500 text-white px-4 py-2 ml-2" type="submit">
        Send
      </button>
    </form>
  );
}
