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
      <div className='footer'>
        still have to make a home page lol <a href="https://github.com/kyleawayan/afterglow">github</a>
        </div>
    </div>
  );
}