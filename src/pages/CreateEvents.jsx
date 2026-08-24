import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventContext';
import './CreateEvents.css';

const CATEGORIES = ['Tech', 'Sports', 'Career', 'Art', 'Workshop'];

const initialFormState = {
    title: '',
    category: '',
    location: '',
    seats: '',
    date: '',
    time: '',
    description: '',
    agreeToTerms: false,
};

function CreateEvents() {
    const navigate = useNavigate();
    const { addEvent } = useEvents();

    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const today = new Date().toISOString().split('T')[0];

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    function validate() {
        const newErrors = {};
        if (!form.title.trim()) newErrors.title = 'Please provide a valid event name.';
        if (!form.category) newErrors.category = 'Please select a category.';
        if (!form.location.trim()) newErrors.location = 'Please provide a valid location.';
        if (!form.seats || Number(form.seats) <= 0) newErrors.seats = 'Please provide a valid number of seats.';
        if (!form.date) newErrors.date = 'Please provide a valid date.';
        if (!form.time) newErrors.time = 'Please provide a valid time.';
        if (!form.description.trim()) newErrors.description = 'Please provide a description.';
        if (!form.agreeToTerms) newErrors.agreeToTerms = 'You must agree before submitting.';
        return newErrors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        setSubmitting(true);
        try {
            await addEvent({
                title: form.title.trim(),
                category: form.category,
                location: form.location.trim(),
                seats: Number(form.seats),
                date: form.date,
                time: form.time,
                description: form.description.trim(),
            });
            navigate('/');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="create-events-page">
            <div className="create-events__card">
                <h1 className="create-events__title">Create New Event</h1>

                <form noValidate onSubmit={handleSubmit} className="create-events__form">
                    <div className="form-group">
                        <label htmlFor="title">Event Name</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Event Name"
                            value={form.title}
                            onChange={handleChange}
                        />
                        {errors.title && <span className="form-error">{errors.title}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select a category</option>
                            {CATEGORIES.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        {errors.category && <span className="form-error">{errors.category}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            placeholder="Location"
                            value={form.location}
                            onChange={handleChange}
                        />
                        {errors.location && <span className="form-error">{errors.location}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="seats">Seats</label>
                        <input
                            id="seats"
                            name="seats"
                            type="number"
                            placeholder="Seats"
                            min="1"
                            value={form.seats}
                            onChange={handleChange}
                        />
                        {errors.seats && <span className="form-error">{errors.seats}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            id="date"
                            name="date"
                            type="date"
                            min={today}
                            value={form.date}
                            onChange={handleChange}
                        />
                        {errors.date && <span className="form-error">{errors.date}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input
                            id="time"
                            name="time"
                            type="time"
                            value={form.time}
                            onChange={handleChange}
                        />
                        {errors.time && <span className="form-error">{errors.time}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows={3}
                            placeholder="Description"
                            value={form.description}
                            onChange={handleChange}
                        />
                        {errors.description && <span className="form-error">{errors.description}</span>}
                    </div>

                    <div className="form-group form-group--checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={form.agreeToTerms}
                                onChange={handleChange}
                            />
                            Agree to terms and conditions
                        </label>
                        {errors.agreeToTerms && <span className="form-error">{errors.agreeToTerms}</span>}
                    </div>

                    <button type="submit" className="btn btn--primary create-events__submit" disabled={submitting}>
                        {submitting ? 'Creating...' : 'Create Event'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateEvents;
