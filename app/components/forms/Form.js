import React from 'react';
import { Formik } from 'formik';

export default function AppForm({children, initialValues, onSubmit, validationShema}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationShema}
        >
            {() => <>{children}</>}
        </Formik>
    )
}