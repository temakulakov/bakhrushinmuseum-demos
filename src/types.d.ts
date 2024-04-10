import {Dayjs} from "dayjs";
import React from "react";

interface IWidget {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    link: string;
    imageUrl: string;
    backgroundColor: string;
    color: string;
};

interface INew {
    id: number;
    title: string;
    page: React.ReactElement;
    date: Dayjs;
    image: string;
};

interface IBuilding {
    id: number;
    title: string;
    page: React.ReactElement;
    image: string;
    addImage: string;
    color: string;
    backgroundColor: string;
    type: 'quarter' | 'filial',
};

interface IEvent {
    id: number;
    title: string;
    link: string;
    page: React.ReactElement;
    date: {from: Dayjs, to: Dayjs};
    image: string;
    position: string;
    type?: 'pro' | 'concert';
}

interface IStore {
    id: number;
    title: string;
    price: number;
    image: string;
    page: React.ReactElement;
}