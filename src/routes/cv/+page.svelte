<script lang="ts">
	import { page } from '$app/stores';
	import Accordion from '$lib/components/accordion.svelte';
	import TechStack from '$lib/components/tech-stack.svelte';
	import type { IPortolioData } from '$lib/models';

	const { profDevelopment, education, techWork, otherWork, filmCredits } = $page.data
		.portfolio as IPortolioData;
</script>

<div>
	{#if techWork}
		<Accordion isOpen={true} title="Development and Engineering Experience">
			<dl class="experience-list">
				{#each techWork as { position, company, startYear, endYear, location, methodology, techStack }}
					{@const isCurrent = endYear === 'Current'}
					{@const itemTypeUrl = isCurrent
						? `http://schema.org/Occupation`
						: `http://schema.org/Role`}

					<dt
						itemprop="hasOccupation"
						itemscope
						itemtype={itemTypeUrl}
						class="experience-list__heading"
					>
						{company} ({startYear}&ndash;{endYear})
						{#if isCurrent}
							<!-- http://schema.org/Occupation -->
							<meta itemprop="name" content={position} />
							<meta itemprop="occupationLocation" content={location} />
							<meta itemprop="skills" content={techStack.join(', ')} />
						{:else}
							<!-- http://schema.org/Role -->
							<meta itemprop="roleName" content={position} />
							<meta itemprop="startDate" content={startYear} />
							<meta itemprop="endDate" content={endYear} />
						{/if}
					</dt>
					<dd class="experience-list__details">
						<p class="experience-list__position">{position}</p>
						<p class="experience-list__extras">{location} • {methodology}</p>
						<div class="experience-list__stack"><TechStack {techStack} /></div>
					</dd>
				{/each}
			</dl>
		</Accordion>
	{/if}

	{#if profDevelopment}
		<Accordion isOpen={true} title="Professional Development Courses and Workshops">
			<ul class="experience-list experience-list--columns">
				{#each profDevelopment as { course, year, techStack }}
					<li>
						<span itemprop="knowsAbout">{@html course}</span> ({year})
						<span class="tech-stack-inline"><TechStack iconSize={16} {techStack} /></span>
					</li>
				{/each}
			</ul>
		</Accordion>
	{/if}

	{#if education}
		<Accordion isOpen={true} title="Education">
			<dl class="experience-list">
				{#each education as { program, degree, year, institution }}
					<dt class="experience-list__heading">{program}</dt>
					<dd class="experience-list__details">
						<p
							itemprop="hasCredential"
							itemscope
							itemtype="https://schema.org/EducationalOccupationalCredential"
							class="experience-list__position"
						>
							<meta itemprop="credentialCategory" content={program} />
							<span itemprop="educationalLevel">{degree}</span>&nbsp;
							<span itemprop="datePublished">{year}</span>
						</p>
						<p
							itemprop="alumniOf"
							itemscope
							itemtype="https://schema.org/EducationalOrganization"
							class="experience-list__extras"
						>
							<span itemprop="legalName">{institution}</span>
						</p>
					</dd>
				{/each}
			</dl>
		</Accordion>
	{/if}

	{#if otherWork}
		<Accordion isOpen={true} title="Other Experience">
			<dl class="experience-list">
				{#each otherWork as { position, company, startYear, endYear }}
					<dt
						itemprop="hasOccupation"
						itemscope
						itemtype="http://schema.org/Role"
						class="experience-list__heading"
					>
						{company} ({startYear}&ndash;{endYear})
						<meta itemprop="roleName" content={position} />
						<meta itemprop="startDate" content={startYear} />
						<meta itemprop="endDate" content={endYear} />
					</dt>
					<dd class="experience-list__details">
						<p class="experience-list__position">{position}</p>
					</dd>
				{/each}
			</dl>
		</Accordion>
	{/if}

	{#if filmCredits}
		<Accordion isOpen={true} title="Film and Television Credits">
			<dl class="experience-list">
				{#each filmCredits as { year, role, title, duration, format, genre, director, festival, synopsis }}
					<dt class="experience-list__heading">
						{title} ({year})
					</dt>
					<dd itemscope itemtype="https://schema.org/CreativeWork" class="experience-list__details">
						<meta itemprop="dateCreated" content={year} />
						<p class="experience-list__position">{role}</p>

						<div
							itemprop="video"
							itemscope
							itemtype="https://schema.org/VideoObject"
							class="experience-list__extras"
						>
							<p>
								<span itemprop="genre">{genre}</span> | <span itemprop="duration">{duration}</span>
								| <span itemprop="encodingFormat">{format}</span> | <strong>Director:</strong>
								<span itemprop="director">{director}</span>{#if festival}
									&nbsp;| <span itemprop="award">{festival}</span>{/if}
							</p>

							{#if synopsis}
								<p itemprop="abstract"><strong>Synopsis:</strong> {@html synopsis}</p>
							{/if}
						</div>
					</dd>
				{/each}
			</dl>
		</Accordion>
	{/if}
</div>

<style>
	.experience-list {
		list-style: none;
	}

	.experience-list p {
		line-height: 1;
		margin: var(--spacer) 0;
	}

	.experience-list,
	.experience-list__details {
		margin: unset;
		padding: unset;
	}

	.experience-list__heading {
		font-size: var(--size-h3);
		font-weight: var(--weight-bold);
	}

	.experience-list__position {
		text-transform: uppercase;
		letter-spacing: var(--letter-space-m);
		color: var(--clr-accent);
	}

	.experience-list__extras {
		color: var(--clr-gray);
	}

	.experience-list dd {
		margin: var(--spacer-m) 0 var(--spacer-l);
	}

	.tech-stack-inline {
		display: inline-flex;
	}

	@container (min-width: 65ch) {
		.experience-list--columns {
			columns: 2;
		}
	}
</style>
