import Head from 'next/head'
import useDarkMode from 'use-dark-mode';
import React, { useState, useCallback } from "react";

export default function Home() {
  useDarkMode(false);

  return (
    <div>
      <Head>
        <title>afterglow</title>
      </Head>
      <header className="App-header2">
        afterglow
      </header>
    </div>
  );
}
