import { useState } from 'react';

export const ModalTriage = ({ show, handleClose }) => {
    const questions = [
        "¿El animal presenta dificultad para respirar?",
        "¿Hay sangrado visible o heridas profundas?",
        "¿El animal ha sufrido un trauma reciente, como una caída o un accidente?",
        "¿El animal muestra signos de dolor intenso, como lloriqueos, gemidos o conducta inusual?",
        "¿El animal ha dejado de comer o beber repentinamente?",
        "¿Hay convulsiones o temblores incontrolables?",
        "¿El animal muestra signos de envenenamiento, como vómitos, diarrea, salivación excesiva o temblores?",
        "¿El animal tiene problemas para moverse o está paralizado?",
        "¿El animal presenta hinchazón o distensión abdominal severa?",
        "¿El animal tiene fiebre alta (más de 39.5 °C o 103.1 °C)?"
    ];

    const [responses, setResponses] = useState(Array(10).fill(null));
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleResponseChange = (index, value) => {
        const newResponses = [...responses];
        newResponses[index] = value;
        setResponses(newResponses);
        if (index < questions.length - 1) {
            setCurrentQuestion(index + 1);
        }
    };

    const handleSubmit = () => {
        const yesCount = responses.filter(response => response === 'yes').length;
        const noCount = responses.filter(response => response === 'no').length;

        if (yesCount > noCount) {
            alert("Es una emergencia. Debería realizar una tele llamada.");
        } else {
            alert("No es una emergencia. Debería agendar una visita.");
        }

        handleClose();
    };

    return (
        <div className={`fixed inset-0 z-50 ${show ? 'flex' : 'hidden'} items-center justify-center`}>
            <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-semibold">Triaje Médico</h2>
                    <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-4">
                    <form>
                        {questions.slice(0, currentQuestion + 1).map((question, index) => (
                            <div key={index} className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-gray-700">{question}</label>
                                <div className="flex items-center">
                                    <label className="inline-flex items-center mr-4">
                                        <input
                                            type="radio"
                                            name={`question${index}`}
                                            onChange={() => handleResponseChange(index, 'yes')}
                                            className="text-blue-600 form-radio"
                                        />
                                        <span className="ml-2">Sí</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name={`question${index}`}
                                            onChange={() => handleResponseChange(index, 'no')}
                                            className="text-blue-600 form-radio"
                                        />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </form>
                </div>
                <div className="flex items-center justify-end p-4 border-t">
                    <button onClick={handleClose} className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                        Cerrar
                    </button>
                    {currentQuestion === questions.length - 1 && (
                        <button onClick={handleSubmit} className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                            Enviar
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

