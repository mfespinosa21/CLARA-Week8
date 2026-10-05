# CLARA · Week 8

Fernanda Espinosa · Business Bending · Fictional clinic incident-coordination rehearsal.

## Live prototype

https://clara-clinica-week8.mafer212005.chatgpt.site

The Site currently requires ChatGPT owner access. Evaluator access must be arranged before submission. No real patient information is accepted or stored. No message is sent externally.

## Dragon Stack

- Clearly labeled simulated LLM drafts.
- Real Web Crypto SHA-256 integrity hashing.
- Structured fictional scenarios and revision-based approval workflow.

An available fictional primary or backup approver, known fallback channel and reviewed text are required. Changing evidence clears the text review and revokes approval. Export includes fictional source, approver, timestamp and correction path. Hashing never proves truth or legal admissibility.

## Run and test

Serve the dist folder over localhost HTTP, for example `python3 -m http.server 8000 --directory dist`, then open localhost:8000.

Run `node --test tests.mjs tests-ui.mjs`. Nine tests passed on 4 October 2026. The UI-handler regression uses a mocked DOM; it is not a browser screenshot test.

## Documents

- [Packet with Mermaid flow and swimlane](docs/PACKET.md)
- [Generated concept mockup](docs/mockup.png)
- [Packet PDF](docs/PACKET_FernandaEspinosa_Week8.pdf)
- [Persona log: method and limitations](docs/PERSONA_FernandaEspinosa_Week8.pdf)
- [Timed demo script](docs/DEMO_SCRIPT_Week8.md)
- [Demo script PDF](docs/DEMO_SCRIPT_FernandaEspinosa_Week8.pdf)
- [Session decisions](DECISIONS.md)

## Development provenance

This GitHub repository imports the existing Site source; these import commits do not represent a new build. The original packet-before-code commit was `551f5e9`, the initial UI commit `425f650`, the corrected-email bug fix `8d8403c`, the persona wording fix `6e32a3f`, and the later review-reset correction `08ca74e`. Original source history remains in the Site source repository. Three successful Site deployments have been recorded; the third includes the review-reset fix.

## Submission status

Code, packet, generated mockup, automated test-fix-redeploy evidence and GitHub publication are available. Remaining: a fresh screenshot-based synthetic persona walkthrough, actual download/mobile checks, the student-recorded 3:30 MP4, and the full original development-chat export. The existing BUILDCHAT PDF is a development record, not a full platform transcript. The older persona PDF documents a concept/text walkthrough, not a completed screenshot test. This section supersedes historical pending-status statements in DECISIONS.md.
