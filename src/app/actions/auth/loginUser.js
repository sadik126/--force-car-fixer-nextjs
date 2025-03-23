"use server"
import React from 'react'

export default async function loginUser(payload) {
    const { email, password } = payload;
    console.log(email, password, payload)


}
