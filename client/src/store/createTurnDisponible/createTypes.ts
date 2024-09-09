type CreateData = {
    eventos: Eventos[] | null,
}
type Eventos = {
    dia: Date | null,
    minTime: Date | null,
    maxTime: Date | null,
};

export default CreateData;