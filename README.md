# CLARA · Week 8
Fernanda Espinosa · Business Bending · Fictional clinic incident-coordination rehearsal.

## Live prototype
https://clara-clinica-week8.mafer212005.chatgpt.site

The Site currently requires ChatGPT owner access. Evaluator access must be arranged before submission. No patient data is accepted or stored. No messages are sent externally.

## Dragon Stack
- Clearly labeled simulated LLM drafts.
- Real Web Crypto SHA-256 integrity hashing.
- Structured fictional scenarios and revision-based approval workflow.

An available primary or backup approver, known fallback channel and reviewed text are required. Changes revoke approval. Hashing does not prove truth or legal admissibility.

## Run and test
Serve `dist`: `python3 -m http.server 8000 --directory dist`. Run `node --test tests.mjs tests-ui.mjs`. Nine tests passed. UI-handler regression uses mocked DOM; separate real browser checks verified evidence-change invalidation, channel-change invalidation, backup approval and cost validation.

## Documents
- [Packet with Mermaid](docs/PACKET.md)
- [Generated mockup](docs/mockup.png)
- [Packet PDF](docs/PACKET_FernandaEspinosa_Week8.pdf)
- [Persona PDF](docs/PERSONA_FernandaEspinosa_Week8.pdf)
- [Demo script](docs/DEMO_SCRIPT_Week8.md)
- [Session decisions](DECISIONS.md)

## Development provenance
This repo imports existing Site source; import commits are not new build evidence. Original packet-before-code commit: 551f5e9; UI: 425f650; corrected-email fix: 8d8403c; first persona wording: 6e32a3f; review-reset correction: 08ca74e; screenshot-persona instruction fix: 9441a2e. Original history remains in Site source repository. Four successful deployments, latest includes the screenshot-persona fix.

## Persona and remaining submission work
A fresh synthetic persona Elena (46, hurried clinic coordinator) reviewed six real screenshots in sequence. Worst confusion: unclear next action with unavailable approvers. Replaced with explicit provider contact through known directory and waiting for authorized approvers; verified on deployed URL. This was simulated screenshot testing, not a real user study.

Still pending: actual TXT download verification (browser download event timed out), student-recorded 3:30 MP4, full original development-chat PDF export, and evaluator access. The existing BUILDCHAT document is a development record, not the full transcript. No mobile validation claimed.
