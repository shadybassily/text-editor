import './textReview.css';

export default function TextReview({ html }) {
   return <div className='text-review' dangerouslySetInnerHTML={{ __html: html }}></div>;
}
