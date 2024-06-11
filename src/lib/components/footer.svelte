<footer data-testid="scmp-footer">
	<nav class="a11y-webring-club" aria-labelledby="a11y-webring-club">
		<h2 id="a11y-webring-club">a11y-webring.club</h2>
		<p>
			This site is a member of the <a rel="external" href="https://a11y-webring.club/"
				>a11y-webring.club</a
			>.
		</p>
		<ul class="webring-list">
			<li>
				<a rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/prev"
					>Previous website</a
				>
			</li>
			<li>
				<a rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/random"
					>Random website</a
				>
			</li>
			<li>
				<a rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/next"
					>Next website</a
				>
			</li>
		</ul>
	</nav>

    <nav aria-label="additional information">
        <a href="https://github.com/dmlb/dmlb-portfolio-2024/blob/main/ACCESSIBILITY_STATEMENT.md">Accessibility Statement</a>
        <a href="https://github.com/dmlb/dmlb-portfolio-2024/issues/new">Report an Issue</a>
        <a href="#top_site">Back to Start</a>
    </nav>
</footer>

<style>
    footer {
        margin: var(--spacer-l) auto var(--spacer);
        padding: var(--spacer) var(--spacer-m) var(--spacer-l);
        border-top: 2px solid var(--clr-secondary);
        max-width: clamp(var(--container-s), 100vw, var(--container-l));
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: var(--spacer-m);
    }

	.a11y-webring-club {
        & h2 {
            font-size: var(--size-h5);
            margin: var(--spacer-s) 0;
        }

		& p {
			margin: var(--spacer-s) 0;
		}
	}

	.webring-list {
        padding: unset;
		margin: unset;
		list-style: none;
		display: flex;
		gap: var(--spacer-s);
	}
</style>
