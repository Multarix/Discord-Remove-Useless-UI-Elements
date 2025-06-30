const eventBus = document.createElement('a')

/**
 * Checks the existence of <selector> DOM element every <intervalInMs> milliseconds
 * and triggers an <eventName> event on the global eventBus if it changes
 * (shows up or gets removed from the DOM)
 *
 * @param {string} selector
 * @param {string} eventName
 * @param {number} intervalInMs
 * @returns the handler of the setInterval that is used internally, so that it can be cleared if needed
 */
function watch(selector, eventName, intervalInMs = 1000) {
	const state = {
		previous: false,
		current: false
	}

	function watcher() {
		const element = document.querySelector(selector)

		state.previous = state.current
		state.current = element

		if (state.current === state.previous) {
			return
		}

		const event = new CustomEvent(eventName, {
			detail: element
		})
		eventBus.dispatchEvent(event)
	}

	return setInterval(watcher, intervalInMs)
}

function exists(element) {
	return element !== null && element !== undefined
}

// ----------------------------------------------------------------------------
// removes "Buy Nitro" and "Shop" buttons when "Direct Messages" page is visible

function removeBuyNitroButton() {
	const nitroButtonHolder = document.querySelector('[href="/store"]')?.parentElement?.parentElement;
	if (exists(nitroButtonHolder)) {
		nitroButtonHolder.style.display = "none";
	}
}

function removeShopButton() {
	const shopButtonHolder = document.querySelector('[href="/shop"]')?.parentElement?.parentElement;
	if (exists(shopButtonHolder)) {
		shopButtonHolder.style.display = "none";
	}
}

eventBus.addEventListener('direct-messages-page-changed', (e) => {
	if (exists(e.detail)) {
		removeBuyNitroButton()
		removeShopButton()
	}
})

watch('[class*="sidebarList"]>[class*="privateChannels"]', 'direct-messages-page-changed')
