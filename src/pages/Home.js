import React from 'react'
import Button from '../components/elements/Button/Button'

function Home() {
    return (
        <div className="container px-5 py-5">
            <div className="flex items-center gap-3 mb-3">
                <Button type="button" sm outline danger roundedLg label="SM Button" />
                <Button type="button" md outline danger roundedLg label="MD Button" />
                <Button type="button" lg outline danger roundedLg label="LG Button" />
                <Button type="button" xl outline danger roundedLg label="XL Button" />
            </div>
            <div className="flex items-center gap-3 mb-3">
                <Button type="button" sm outline success roundedLg label="SM Button" />
                <Button type="button" md outline success roundedLg label="MD Button" />
                <Button type="button" lg outline success roundedLg label="LG Button" />
                <Button type="button" xl outline success roundedLg label="XL Button" />
            </div>
            <div className="flex items-center gap-3 mb-3">
                <Button type="button" sm outline warning roundedLg label="SM Button" />
                <Button type="button" md outline warning roundedLg label="MD Button" />
                <Button type="button" lg outline warning roundedLg label="LG Button" />
                <Button type="button" xl outline warning roundedLg label="XL Button" />
            </div>
            <div className="flex items-center gap-3 mb-3">
                <Button type="button" sm outline info roundedLg label="SM Button" />
                <Button type="button" md outline info roundedLg label="MD Button" />
                <Button type="button" lg outline info roundedLg label="LG Button" />
                <Button type="button" xl outline info roundedLg label="XL Button" />
            </div>
        </div>
    )
}

export default Home