# DEMO - Fernanda Espinosa - Week 8
Target: 3 minutes of live product walkthrough + 30 seconds of reflection. Read at a relaxed pace; rehearse with a timer. All data and AI outputs are simulated.

## 0:00-0:25 | Open the live URL
Hi, I am Fernanda Espinosa. This is CLARA, a working rehearsal for the administrator of a small clinic in Mexico. The clinic suspects that its appointment or patient-contact account may be compromised. CLARA helps organize information and prepare communication while a qualified technical provider investigates.

## 0:25-0:55 | Show the evidence cards
I start with a fictional appointment-system failure. The screen separates confirmed facts, unverified reports, and unknowns. Staff could not access the system, but that does not prove a cyberattack. We also do not know whether anyone accessed patient records. The draft keeps those questions open.

## 0:55-1:20 | Show the draft and SHA-256 receipt
The Dragon Stack combines clearly labeled simulated AI drafts, a real browser security API for SHA-256 hashing, and structured fictional incident data with workflow automation. The hash identifies this version of the evidence. It does not prove that the information is true, legally admissible, or that the system is safe.

## 1:20-1:55 | Demonstrate blocked approval and backup
Before approval, downloading is blocked. I make Laura, the primary administrator, unavailable. Carlos is the fictional backup. I choose a fallback channel and confirm that I checked it against a previously known source. CLARA records that check; it does not verify the contact for me. If both people are unavailable, approval stays blocked and I prepare a human escalation.

## 1:55-2:25 | Approve, then change evidence
Now I make Carlos available, review the exact text, and register approval. The message becomes eligible for download, but CLARA does not send it. Next, I change the evidence: the provider confirms that the reported email was legitimate. The approval is revoked and the review checkbox clears. The new wording still does not determine whether patient records were accessed.

## 2:25-3:00 | Show costs and explain testing
The calculator shows the service provider's costs. With these illustrative assumptions, the margin is five hundred pesos before any omitted costs. This is not validated pricing or proof that clinics will pay. During development, a corrected email did not update the draft; that bug was fixed and redeployed. A later regression test also caught a review checkbox that stayed checked after evidence changed. Nine automated tests now pass. These tests do not replace a real clinic pilot or a screenshot-based user test.

## 3:00-3:30 | Camera on: what changed my mind
What changed my mind was realizing that a draft is useful only when someone can safely decide what to do with it. My first idea was a broad shield for small businesses. I narrowed it to coordination for a clinic facing uncertainty. The value is not a security score or a promise of recovery. It is keeping facts separate from assumptions, identifying a responsible human, and preventing an outdated message from carrying an old approval.

# Recording checklist
- Record the live URL, not the generated mockup.
- Restore the initial scenario before starting.
- Do not select the correction until the correction demonstration.
- Demonstrate both unavailable, then restore Carlos, verify channel and review.
- After changing evidence, show that download is disabled and review cleared.
- Finish with 30 seconds of reflection on camera.
- Save the recording as DEMO_FernandaEspinosa.mp4.
- Timing is a target, not a measured recording duration.
