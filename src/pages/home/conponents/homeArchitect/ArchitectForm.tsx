import React, {useState} from 'react';
import {useFormik} from 'formik';

import {
    ButtonBlockWrapper,
    ButtonDevicesGroup,
    ButtonPlatformGroup, DescriptionBlock, DescriptionBlockWrapper,
    FormDataItemUpload,
    FormWrapper,
    InputUploadItem, PrivacyPolicy,
    RowBlock,
    SelectBlock,
    SelectButton, SelectStagesBlock, StagesBlock, SubmitButton,
    Textarea,
    UploadCancel,
    UploadCancelInner,
    UploadItem,
    UploadItemIcCont,
    UploadItemLabel,
    UploadItemResult,
    UploadWrapper
} from "./Architect-style.ts";
import DeleteFileIcon from '../../assets/deleteFile.svg?react'
import UploadIcon from '../../assets/uploadFile.svg?react'
import {SubTitleGl} from "../../../../common/components/style/global.ts";
import {Link} from "react-router-dom";


const platforms = ['IOS', 'Android', 'Cross-Platform'];
const devices = ['Мобильное', 'Smart TV', 'Часы', 'Планшет', 'Другое'];
const stages = ['Идея', 'MVP', 'Прототип/спецификация', 'Продуманное решение', 'Разработка приложения'];

interface FormValues {
    platform: string;
    devices: string[];
    stages: string[];
    projectDescription: string;
    myFile: File | null;
}

export const ArchitectForm: React.FC = () => {
    const [service, setService] = useState(true)
    const formik = useFormik<FormValues>({
        initialValues: {
            platform: '',
            devices: [] as string[],
            stages: [] as string[],
            projectDescription: '',
            myFile: null,
        },
        onSubmit: (values) => {
            // Обработка отправки формы
            console.log(values);
        },
    });

    return (
        <FormWrapper onSubmit={formik.handleSubmit}>
            <RowBlock>
                <SelectBlock>
                    <SubTitleGl><span>1.</span>Платформа</SubTitleGl>
                    <ButtonPlatformGroup>
                        {platforms.map((platform) => (
                            <SelectButton
                                key={platform}
                                selected={formik.values.platform === platform}
                                onClick={() => formik.setFieldValue('platform', platform)}
                            >
                                {platform}
                            </SelectButton>
                        ))}
                    </ButtonPlatformGroup>

                </SelectBlock>
                <SelectBlock>
                    <SubTitleGl><span>2.</span>Устройство</SubTitleGl>
                    <ButtonDevicesGroup>
                        {devices.map((device) => (
                            <SelectButton
                                key={device}
                                selected={formik.values.devices.includes(device)}
                                onClick={() => {
                                    const devices = [...formik.values.devices];
                                    if (devices.includes(device)) {
                                        devices.splice(devices.indexOf(device), 1);
                                    } else {
                                        devices.push(device);
                                    }
                                    formik.setFieldValue('devices', devices);
                                }}
                            >
                                {device}
                            </SelectButton>
                        ))}
                    </ButtonDevicesGroup>
                </SelectBlock>
            </RowBlock>

            <StagesBlock>
                <SubTitleGl><span>3.</span>Этап</SubTitleGl>
                <SelectStagesBlock>
                    {stages.map((stage) => (
                        <SelectButton
                            key={stage}
                            selected={formik.values.stages.includes(stage)}
                            onClick={() => {
                                const stages = [...formik.values.stages];
                                if (stages.includes(stage)) {
                                    stages.splice(stages.indexOf(stage), 1);
                                } else {
                                    stages.push(stage);
                                }
                                formik.setFieldValue('stages', stages);
                            }}
                        >
                            {stage}
                        </SelectButton>
                    ))}
                </SelectStagesBlock>

            </StagesBlock>
            <DescriptionBlockWrapper>
                <SubTitleGl><span>4.</span>Комментарий</SubTitleGl>
                <DescriptionBlock>
                    <Textarea
                        id="projectDescription"
                        name="projectDescription"
                        placeholder="Расскажите о проекте"
                        onChange={formik.handleChange}
                        value={formik.values.projectDescription}
                    />
                    <FormDataItemUpload>
                        <UploadWrapper>
                            <UploadItem>
                                <UploadItemIcCont>
                                    <UploadIcon/>
                                </UploadItemIcCont>
                                <UploadItemResult>
                                    {formik.values.myFile?.name}
                                </UploadItemResult>
                                <UploadItemLabel htmlFor="myFile">
                                    Загрузить файл
                                </UploadItemLabel>
                                <InputUploadItem
                                    name="myFile"
                                    type="file"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        formik.setFieldValue("myFile", event.currentTarget.files?.[0] || null);
                                    }}
                                    value={undefined}/>
                            </UploadItem>

                            <UploadCancel
                                style={formik.values.myFile ? {display: "block"} : {display: "none"}}
                                onClick={() => {
                                    formik.values.myFile = null
                                    setService(!service)
                                }}
                            >
                                <UploadCancelInner>
                                    <DeleteFileIcon/>
                                </UploadCancelInner>
                            </UploadCancel>
                        </UploadWrapper>
                    </FormDataItemUpload>
                </DescriptionBlock>
            </DescriptionBlockWrapper>
            {/*BUTTON*/}
            <ButtonBlockWrapper>
                <SubmitButton type="submit"><span><span>Отправить</span></span></SubmitButton>
                <PrivacyPolicy>
                    Отправляя форму, Вы даете согласие на обработку своих
                    персональных данных в соответствии с <Link to={'/'}>политикой
                    конфиденциальности</Link>
                </PrivacyPolicy>
            </ButtonBlockWrapper>
        </FormWrapper>
    );
};
