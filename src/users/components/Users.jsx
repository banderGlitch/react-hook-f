import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, TextField } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from "../types/schema";
// Reference we can take from : - https://www.youtube.com/watch?v=JyeWoqWsQFo&t=4113s

export function Users() {

    const { register, formState: { errors } } = useForm({ mode: 'all', resolver: zodResolver(schema) });

    console.log("error---------->", errors)


    return (
        <Stack sx={{ gap : 2 , width:"30%",}}>
            <TextField {...register('name')} label="Name" error={!!errors.name} helperText={errors.name?.message} />
            <TextField {...register('email')} label="Email" error={!!errors.email} helperText={errors.email?.email} />

        </Stack>
    );
}
