import React from 'react'
import Button from '../components/elements/Button/Button'

function Preview() {
    return (
        <div className="container px-5 py-5 flex flex-col gap-5">
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="danger" outlined rounded="lg" label="SM Button" />
                <Button type="button" size="md" variant="danger" outlined rounded="lg" label="MD Button" />
                <Button type="button" size="lg" variant="danger" outlined rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="danger" outlined rounded="lg" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="success" outlined rounded="lg" label="SM Button" />
                <Button type="button" size="md" variant="success" outlined rounded="lg" label="MD Button" />
                <Button type="button" size="lg" variant="success" outlined rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="success" outlined rounded="lg" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" outlined variant="warning" rounded="lg" label="SM Button" />
                <Button type="button" size="md" outlined variant="warning" rounded="lg" label="MD Button" />
                <Button type="button" size="lg" outlined variant="warning" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" outlined variant="warning" rounded="lg" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="info" outlined rounded="lg" label="SM Button" />
                <Button type="button" size="md" variant="info" outlined rounded="lg" label="MD Button" />
                <Button type="button" size="lg" variant="info" outlined rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="info" outlined rounded="lg" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="indigo" outlined rounded="lg" label="SM Button" />
                <Button type="button" size="md" variant="indigo" outlined rounded="lg" label="MD Button" />
                <Button type="button" size="lg" variant="indigo" outlined rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="indigo" outlined rounded="lg" label="XL Button" />
            </div>
        </div>
    )
}

export default Preview;