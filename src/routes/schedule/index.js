import { h, Component } from 'preact';
import style from './style';

export default class Schedule extends Component {
	render() {
		return (
			<div>
				<div className={[style.hero, 'hero'].join(' ')}>
					<svg viewBox="0 0 46 33" xmlns="http://www.w3.org/2000/svg"><g id="nav-io-phase-01" fill="none" fill-rule="evenodd" transform="translate(-62 -17)"><g id="ic-io-logo-indigo" transform="translate(62 17)" fill="#536DFE"><g id="io-logo">
						<polygon id="Fill-1" points="0 27.6131665 11.6101901 27.6131665 11.6101901 4.41459344 0 4.41459344" />
						<polygon id="Fill-2" points="20.1618317 2.15798668e-05 12.9722085 32.3443582 14.7781521 32.7494123 21.9677754 0.405075688" /><path d="M33.2533553,3.45297298 C26.3665842,3.45297298 20.7835806,9.06222787 20.7835806,15.9813807 C20.7835806,22.9009651 26.3665842,28.5100042 33.2533553,28.5100042 C40.140556,28.5100042 45.7233447,22.9009651 45.7233447,15.9813807 C45.7233447,9.06222787 40.140556,3.45297298 33.2533553,3.45297298" id="Fill-3" /></g></g></g>
					</svg>
					<h2>Schedule</h2>
					<p>This is just a preview! More events will be added frequently, so make sure to check back often.</p>
				</div>

				<div class={style.schedule}>
					<div class={style.schedule_section}>
						<div class={style.schedule_content}>
							<div class={style.schedule_time}>
								9<span>AM</span>
							</div>
							<div class={style.schedule_events}>
								<div class={style.schedule_event}>
									<div class={style.schedule_event_details}>
										<div class={style.schedule_event_title}>Registration</div>
										<div class={style.schedule_event_meta}>
											<div class={style.schedule_event_description}>1 hour</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class={style.schedule_section}>
						<div class={style.schedule_content}>
							<div class={style.schedule_time}>
								9:45<span>AM</span>
							</div>
							<div class={style.schedule_events}>
								<div class={style.schedule_event}>
									<div class={style.schedule_event_details}>
										<div class={style.schedule_event_title}>Keynote</div>
										<div class={style.schedule_event_meta}>
											<div class={style.schedule_event_description}>45 mins</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class={style.schedule_section}>
						<div class={style.schedule_content}>
							<div class={style.schedule_time}>
								12:30<span>PM</span>
							</div>
							<div class={style.schedule_events}>
								<div class={style.schedule_event}>
									<div class={style.schedule_event_details}>
										<div class={style.schedule_event_title}>Lunch</div>
										<div class={style.schedule_event_meta}>
											<div class={style.schedule_event_description}>1 hour</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class={style.schedule_section}>
						<div class={style.schedule_content}>
							<div class={style.schedule_time}>
								5:30<span>PM</span>
							</div>
							<div class={style.schedule_events}>
								<div class={style.schedule_event}>
									<div class={style.schedule_event_details}>
										<div class={style.schedule_event_title}>Photo Session &amp; Closing</div>
										<div class={style.schedule_event_meta}>
											<div class={style.schedule_event_description}>15 mins</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		);
	}
}

