import SelectBox, { IOption } from '../SelectBox/SelectBox';

const sortOption: IOption[] = [
    {
        text: '최신 등록순',
        value: 'recent',
    },
    {
        text: '오름차순',
        value: 'desc',
    },
    {
        text: '내림차순',
        value: 'asc',
    },
] as const;

const viewOption: IOption[] = [
    {
        text: '2개씩 보기',
        value: '2',
    },
    {
        text: '4개씩 보기',
        value: '4',
    },
];

const FIlterArea = () => {
    return (
        <div>
            <SelectBox options={sortOption} />
            <SelectBox options={viewOption} />
        </div>
    );
};

export default FIlterArea;
