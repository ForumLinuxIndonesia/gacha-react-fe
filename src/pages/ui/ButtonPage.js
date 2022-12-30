import React from "react";
import Button from "../../components/elements/Button/Button";

function ButtonPage() {
    return (
        <div className="container flex flex-col gap-5 px-5 py-5">
            <h1>Non Outlined</h1>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="primary" rounded="sm" label="SM Button" />
                <Button type="button" size="md" variant="primary" rounded="md" label="MD Button" />
                <Button type="button" size="lg" variant="primary" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="primary" rounded="xl" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="danger" rounded="sm" label="SM Button" />
                <Button type="button" size="md" variant="danger" rounded="md" label="MD Button" />
                <Button type="button" size="lg" variant="danger" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="danger" rounded="xl" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="success" rounded="sm" label="SM Button" />
                <Button type="button" size="md" variant="success" rounded="md" label="MD Button" />
                <Button type="button" size="lg" variant="success" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="success" rounded="xl" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="warning" rounded="sm" label="SM Button" />
                <Button type="button" size="md" variant="warning" rounded="md" label="MD Button" />
                <Button type="button" size="lg" variant="warning" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="warning" rounded="xl" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="info" rounded="sm" label="SM Button" />
                <Button type="button" size="md" variant="info" rounded="md" label="MD Button" />
                <Button type="button" size="lg" variant="info" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="info" rounded="xl" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="indigo" rounded="sm" label="SM Button" />
                <Button type="button" size="md" variant="indigo" rounded="md" label="MD Button" />
                <Button type="button" size="lg" variant="indigo" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="indigo" rounded="xl" label="XL Button" />
            </div>
            <h1>Outlined</h1>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="outline-danger" rounded="sm" label="SM Button" />
                <Button type="button" size="md" variant="outline-danger" rounded="md" label="MD Button" />
                <Button type="button" size="lg" variant="outline-danger" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="outline-danger" rounded="xl" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="outline-success" rounded="sm" label="SM Button" />
                <Button type="button" size="md" variant="outline-success" rounded="md" label="MD Button" />
                <Button type="button" size="lg" variant="outline-success" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="outline-success" rounded="xl" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="outline-warning" rounded="sm" label="SM Button" />
                <Button type="button" size="md" variant="outline-warning" rounded="md" label="MD Button" />
                <Button type="button" size="lg" variant="outline-warning" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="outline-warning" rounded="xl" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="outline-info" rounded="sm" label="SM Button" />
                <Button type="button" size="md" variant="outline-info" rounded="md" label="MD Button" />
                <Button type="button" size="lg" variant="outline-info" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="outline-info" rounded="xl" label="XL Button" />
            </div>
            <div className="flex items-center gap-5 mb-3">
                <Button type="button" size="sm" variant="outline-indigo" rounded="sm" label="SM Button" />
                <Button type="button" size="md" variant="outline-indigo" rounded="md" label="MD Button" />
                <Button type="button" size="lg" variant="outline-indigo" rounded="lg" label="LG Button" />
                <Button type="button" size="xl" variant="outline-indigo" rounded="xl" label="XL Button" />
            </div>
        </div>
    );
}

export default ButtonPage;
