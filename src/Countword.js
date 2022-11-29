import {useState,useRef} from 'react';

function WordCount(){

    const textAreaRef = useRef();
    const [wordCount,setWordCount] = useState(0);

    const countWords = (e) => {
      const text = textAreaRef.current.value;
      setWordCount(text.split(" ").length);
    }

    return (
        <div className='wordcount'>
            <header className='header'>
                <h1 id='heading'>Count Word</h1>
                <p id='headpara'>A simple and free text and webpage word counter</p>
            </header>
            <div className=''>
                <textarea className='textarea' placeholder="Type or paste your text. We'll never save or send it anywhere else." ref={textAreaRef} /><br />
                <div className='count'>
                    <button id='btn' onClick={countWords}>Count Words</button>
                    <p id='para'>{wordCount} words.</p>
                </div>
            </div>

        </div>
    )
}

export default WordCount;