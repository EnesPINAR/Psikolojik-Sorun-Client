import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";

const Reservation = () => {

    const [cardName, setCardName] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [cardEndingMonth, setCardEndingMonth] = useState();
    const [cardEndingYear, setCardEndingYear] = useState();
    const [cardCVC, setCardCVC] = useState();

    return (
        <div>
            <Header></Header>
            <div className="reservation">
                <section className="psychologistPrewiev fullscreen">
                    <div className="container">
                        <div className="reservationContainer">
                            <div className="reservationHeader">
                                <img src="/img/profilephoto.svg" alt="Profile photo" />
                                <div className="title row">
                                    <div className="col-12">
                                        <h3>Name HERE</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="reservationContent">
                                <div className="aboutPsychologist">
                                    <div className="title row">
                                        <div className="col-12">
                                            <h3>About Him</h3>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur, quasi saepe ut
                                        minima sequi unde! Incidunt temporibus quidem nisi sequi eaque, doloremque impedit culpa
                                        veniam sed natus ipsum molestias, rem, assumenda nam exercitationem? Illo molestias
                                        cupiditate quasi! Nulla maxime quo beatae animi veniam quam corporis ullam officiis sed,
                                        tenetur vitae molestias eligendi omnis, praesentium, illum autem. Quisquam, ex placeat.
                                    </p>
                                </div>
                                <div className="psychologistsComments">
                                    <div className="title row">
                                        <div className="col-12">
                                            <h3>Comments</h3>
                                        </div>
                                    </div>
                                    <div className="commentsContainer">
                                        <div className="commentItem">
                                            <div className="title row">
                                                <div className="col-12">
                                                    <h4>Name HERE</h4>
                                                </div>
                                            </div>
                                            <div className="comment">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, sunt.</p>
                                            </div>
                                        </div>
                                        <div className="commentItem">
                                            <div className="comment">
                                                <div className="title row">
                                                    <div className="col-12">
                                                        <h4>Name HERE</h4>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, sunt.</p>
                                            </div>
                                        </div>
                                        <div className="commentItem">
                                            <div className="comment">
                                                <div className="title row">
                                                    <div className="col-12">
                                                        <h4>Name HERE</h4>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, sunt.</p>
                                            </div>
                                        </div>
                                        <div className="commentItem">
                                            <div className="comment">
                                                <div className="title row">
                                                    <div className="col-12">
                                                        <h4>Name HERE</h4>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, sunt.</p>
                                            </div>
                                        </div>
                                        <div className="commentItem">
                                            <div className="comment">
                                                <div className="title row">
                                                    <div className="col-12">
                                                        <h4>Name HERE</h4>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, sunt.</p>
                                            </div>
                                        </div>
                                        <div className="commentItem">
                                            <div className="comment">
                                                <div className="title row">
                                                    <div className="col-12">
                                                        <h4>Name HERE</h4>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, sunt.</p>
                                            </div>
                                        </div>
                                        <div className="commentItem">
                                            <div className="comment">
                                                <div className="title row">
                                                    <div className="col-12">
                                                        <h4>Name HERE</h4>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, sunt.</p>
                                            </div>
                                        </div>
                                        <div className="commentItem">
                                            <div className="comment">
                                                <div className="title row">
                                                    <div className="col-12">
                                                        <h4>Name HERE</h4>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, sunt.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slideForMore">
                            <p>Slide for selecting date and time</p>
                            <img src="/img/slide.svg" alt="Arrow Down" />
                        </div>
                    </div>
                </section>
                <section className="selectingDateTime fullscreen">
                    <div className="container">
                        <div className="reservationContainer">
                            <div className="reservationContent">
                                <div className="title row">
                                    <div className="col-12">
                                        <h3>Available Dates</h3>
                                    </div>
                                </div>
                                <div className="calendarsContainer">
                                    <div className="calendar">
                                        <div className="calendarMonth">
                                            <div className="title row">
                                                <div className="col-12">
                                                    <h3>January</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="calendarDayNames">
                                            <ul>
                                                <li>MO</li>
                                                <li>TU</li>
                                                <li>WE</li>
                                                <li>TH</li>
                                                <li>FR</li>
                                                <li>SA</li>
                                                <li>SU</li>
                                            </ul>
                                        </div>
                                        <div className="calendarDays">
                                            <ul>
                                                <li className="unavailable"><button disabled>1</button></li>
                                                <li className="unavailable"><button disabled>2</button></li>
                                                <li className="unavailable"><button disabled>3</button></li>
                                                <li><button>4</button></li>
                                                <li><button>5</button></li>
                                                <li><button>6</button></li>
                                                <li><button>7</button></li>
                                                <li><button>8</button></li>
                                                <li><button>9</button></li>
                                                <li><button>10</button></li>
                                                <li><button>11</button></li>
                                                <li><button>12</button></li>
                                                <li><button>13</button></li>
                                                <li><button>14</button></li>
                                                <li><button>15</button></li>
                                                <li><button>16</button></li>
                                                <li><button>17</button></li>
                                                <li><button>18</button></li>
                                                <li><button>19</button></li>
                                                <li><button>20</button></li>
                                                <li><button>21</button></li>
                                                <li><button>22</button></li>
                                                <li><button>23</button></li>
                                                <li><button>24</button></li>
                                                <li><button>25</button></li>
                                                <li><button>26</button></li>
                                                <li><button>27</button></li>
                                                <li><button>28</button></li>
                                                <li><button>29</button></li>
                                                <li><button>30</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="calendar">
                                        <div className="calendarMonth">
                                            <div className="title row">
                                                <div className="col-12">
                                                    <h3>January</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="calendarDayNames">
                                            <ul>
                                                <li>MO</li>
                                                <li>TU</li>
                                                <li>WE</li>
                                                <li>TH</li>
                                                <li>FR</li>
                                                <li>SA</li>
                                                <li>SU</li>
                                            </ul>
                                        </div>
                                        <div className="calendarDays">
                                            <ul>
                                                <li className="unavailable"><button disabled>1</button></li>
                                                <li className="unavailable"><button disabled>2</button></li>
                                                <li className="unavailable"><button disabled>3</button></li>
                                                <li><button>4</button></li>
                                                <li><button>5</button></li>
                                                <li><button>6</button></li>
                                                <li><button>7</button></li>
                                                <li><button>8</button></li>
                                                <li><button>9</button></li>
                                                <li><button>10</button></li>
                                                <li><button>11</button></li>
                                                <li><button>12</button></li>
                                                <li><button>13</button></li>
                                                <li><button>14</button></li>
                                                <li><button>15</button></li>
                                                <li><button>16</button></li>
                                                <li><button>17</button></li>
                                                <li><button>18</button></li>
                                                <li><button>19</button></li>
                                                <li><button>20</button></li>
                                                <li><button>21</button></li>
                                                <li><button>22</button></li>
                                                <li><button>23</button></li>
                                                <li><button>24</button></li>
                                                <li><button>25</button></li>
                                                <li><button>26</button></li>
                                                <li><button>27</button></li>
                                                <li><button>28</button></li>
                                                <li><button>29</button></li>
                                                <li><button>30</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="calendar">
                                        <div className="calendarMonth">
                                            <div className="title row">
                                                <div className="col-12">
                                                    <h3>January</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="calendarDayNames">
                                            <ul>
                                                <li>MO</li>
                                                <li>TU</li>
                                                <li>WE</li>
                                                <li>TH</li>
                                                <li>FR</li>
                                                <li>SA</li>
                                                <li>SU</li>
                                            </ul>
                                        </div>
                                        <div className="calendarDays">
                                            <ul>
                                                <li className="unavailable"><button disabled>1</button></li>
                                                <li className="unavailable"><button disabled>2</button></li>
                                                <li className="unavailable"><button disabled>3</button></li>
                                                <li><button>4</button></li>
                                                <li><button>5</button></li>
                                                <li><button>6</button></li>
                                                <li><button>7</button></li>
                                                <li><button>8</button></li>
                                                <li><button>9</button></li>
                                                <li><button>10</button></li>
                                                <li><button>11</button></li>
                                                <li><button>12</button></li>
                                                <li><button>13</button></li>
                                                <li><button>14</button></li>
                                                <li><button>15</button></li>
                                                <li><button>16</button></li>
                                                <li><button>17</button></li>
                                                <li><button>18</button></li>
                                                <li><button>19</button></li>
                                                <li><button>20</button></li>
                                                <li><button>21</button></li>
                                                <li><button>22</button></li>
                                                <li><button>23</button></li>
                                                <li><button>24</button></li>
                                                <li><button>25</button></li>
                                                <li><button>26</button></li>
                                                <li><button>27</button></li>
                                                <li><button>28</button></li>
                                                <li><button>29</button></li>
                                                <li><button>30</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="calendar">
                                        <div className="calendarMonth">
                                            <div className="title row">
                                                <div className="col-12">
                                                    <h3>January</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="calendarDayNames">
                                            <ul>
                                                <li>MO</li>
                                                <li>TU</li>
                                                <li>WE</li>
                                                <li>TH</li>
                                                <li>FR</li>
                                                <li>SA</li>
                                                <li>SU</li>
                                            </ul>
                                        </div>
                                        <div className="calendarDays">
                                            <ul>
                                                <li className="unavailable"><button disabled>1</button></li>
                                                <li className="unavailable"><button disabled>2</button></li>
                                                <li className="unavailable"><button disabled>3</button></li>
                                                <li><button>4</button></li>
                                                <li><button>5</button></li>
                                                <li><button>6</button></li>
                                                <li><button>7</button></li>
                                                <li><button>8</button></li>
                                                <li><button>9</button></li>
                                                <li><button>10</button></li>
                                                <li><button>11</button></li>
                                                <li><button>12</button></li>
                                                <li><button>13</button></li>
                                                <li><button>14</button></li>
                                                <li><button>15</button></li>
                                                <li><button>16</button></li>
                                                <li><button>17</button></li>
                                                <li><button>18</button></li>
                                                <li><button>19</button></li>
                                                <li><button>20</button></li>
                                                <li><button>21</button></li>
                                                <li><button>22</button></li>
                                                <li><button>23</button></li>
                                                <li><button>24</button></li>
                                                <li><button>25</button></li>
                                                <li><button>26</button></li>
                                                <li><button>27</button></li>
                                                <li><button>28</button></li>
                                                <li><button>29</button></li>
                                                <li><button>30</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="calendar">
                                        <div className="calendarMonth">
                                            <div className="title row">
                                                <div className="col-12">
                                                    <h3>January</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="calendarDayNames">
                                            <ul>
                                                <li>MO</li>
                                                <li>TU</li>
                                                <li>WE</li>
                                                <li>TH</li>
                                                <li>FR</li>
                                                <li>SA</li>
                                                <li>SU</li>
                                            </ul>
                                        </div>
                                        <div className="calendarDays">
                                            <ul>
                                                <li className="unavailable"><button disabled>1</button></li>
                                                <li className="unavailable"><button disabled>2</button></li>
                                                <li className="unavailable"><button disabled>3</button></li>
                                                <li><button>4</button></li>
                                                <li><button>5</button></li>
                                                <li><button>6</button></li>
                                                <li><button>7</button></li>
                                                <li><button>8</button></li>
                                                <li><button>9</button></li>
                                                <li><button>10</button></li>
                                                <li><button>11</button></li>
                                                <li><button>12</button></li>
                                                <li><button>13</button></li>
                                                <li><button>14</button></li>
                                                <li><button>15</button></li>
                                                <li><button>16</button></li>
                                                <li><button>17</button></li>
                                                <li><button>18</button></li>
                                                <li><button>19</button></li>
                                                <li><button>20</button></li>
                                                <li><button>21</button></li>
                                                <li><button>22</button></li>
                                                <li><button>23</button></li>
                                                <li><button>24</button></li>
                                                <li><button>25</button></li>
                                                <li><button>26</button></li>
                                                <li><button>27</button></li>
                                                <li><button>28</button></li>
                                                <li><button>29</button></li>
                                                <li><button>30</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="calendar">
                                        <div className="calendarMonth">
                                            <div className="title row">
                                                <div className="col-12">
                                                    <h3>January</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="calendarDayNames">
                                            <ul>
                                                <li>MO</li>
                                                <li>TU</li>
                                                <li>WE</li>
                                                <li>TH</li>
                                                <li>FR</li>
                                                <li>SA</li>
                                                <li>SU</li>
                                            </ul>
                                        </div>
                                        <div className="calendarDays">
                                            <ul>
                                                <li className="unavailable"><button disabled>1</button></li>
                                                <li className="unavailable"><button disabled>2</button></li>
                                                <li className="unavailable"><button disabled>3</button></li>
                                                <li><button>4</button></li>
                                                <li><button>5</button></li>
                                                <li><button>6</button></li>
                                                <li><button>7</button></li>
                                                <li><button>8</button></li>
                                                <li><button>9</button></li>
                                                <li><button>10</button></li>
                                                <li><button>11</button></li>
                                                <li><button>12</button></li>
                                                <li><button>13</button></li>
                                                <li><button>14</button></li>
                                                <li><button>15</button></li>
                                                <li><button>16</button></li>
                                                <li><button>17</button></li>
                                                <li><button>18</button></li>
                                                <li><button>19</button></li>
                                                <li><button>20</button></li>
                                                <li><button>21</button></li>
                                                <li><button>22</button></li>
                                                <li><button>23</button></li>
                                                <li><button>24</button></li>
                                                <li><button>25</button></li>
                                                <li><button>26</button></li>
                                                <li><button>27</button></li>
                                                <li><button>28</button></li>
                                                <li><button>29</button></li>
                                                <li><button>30</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="timesContainer">
                                    <div className="title row">
                                        <div className="col-12">
                                            <h3>Available Times</h3>
                                        </div>
                                    </div>
                                    <ul>
                                        <li><button className="btnType1" disabled>09.00 - 09.40</button></li>
                                        <li><button className="btnType1" disabled>09.00 - 09.40</button></li>
                                        <li><button className="btnType1">09.00 - 09.40</button></li>
                                        <li><button className="btnType1">09.00 - 09.40</button></li>
                                        <li><button className="btnType1">09.00 - 09.40</button></li>
                                        <li><button className="btnType1">09.00 - 09.40</button></li>
                                        <li><button className="btnType1">09.00 - 09.40</button></li>
                                        <li><button className="btnType1">09.00 - 09.40</button></li>
                                        <li><button className="btnType1">09.00 - 09.40</button></li>
                                        <li><button className="btnType1">09.00 - 09.40</button></li>
                                        <li><button className="btnType1">09.00 - 09.40</button></li>
                                        <li><button className="btnType1">09.00 - 09.40</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="slideForMore">
                            <p>Slide for payment</p>
                            <img src="/img/slide.svg" alt="Arrow Down" />
                        </div>
                    </div>
                </section>
                <section className="payment fullscreen">
                    <div className="container">
                        <div className="reservationContainer">
                            <div className="reservationHeader">
                                <div className="title row">
                                    <div className="col-12">
                                        <h3>Payment</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="reservationContent">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="paymentInfos">
                                            <input type="text" placeholder="Name on the card" onChange={(event) => {
                                                setCardName(event.target.value)
                                            }} />
                                            <input type="text" placeholder="Card number" onChange={(event) => {
                                                setCardNumber(event.target.value)
                                            }} />
                                            <span>
                                                <input type="text" placeholder="Ending month" onChange={(event) => {
                                                    setCardEndingMonth(event.target.value)
                                                }} />
                                                <input type="text" placeholder="Ending year" onChange={(event) => {
                                                    setCardEndingYear(event.target.value)
                                                }} />
                                            </span>
                                            <input type="text" placeholder="Secure code" onChange={(event) => {
                                                setCardCVC(event.target.value)
                                            }} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="cardOverview">
                                            <p>{cardNumber}</p>
                                            <p className="cardName">{cardName}</p>
                                            <span>
                                                <span>
                                                    <p>{cardEndingMonth}</p>
                                                    {
                                                        (cardEndingMonth && cardEndingYear) === undefined || (cardEndingMonth && cardEndingYear) === "" ? null : <p className="slash">/</p>
                                                    }
                                                    <p>{cardEndingYear}</p>
                                                </span>
                                                <p>{cardCVC}</p>
                                            </span>
                                        </div>
                                    </div>
                                    <button className="btnType1 confirmButton">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Reservation;