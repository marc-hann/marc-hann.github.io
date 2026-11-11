---
title: Genomic file upload
year: 2023
role: Lead · Full-stack
stack: [TypeScript, React, Express, AWS S3]
status: Live
featured: true
order: 1
illustration: genomic-upload
---

Sequencing produces very large text files of genomic data, typically 2 to 20 GB each. Labs need to get them into [Hedera Prime](#hedera-prime-mvp) reliably, whatever their connection.

I designed and implemented a multipart upload that sends files straight from the browser to Amazon S3 through pre-signed URLs. Each file is split into parts that upload independently, every part is checked for integrity, and a failed upload resumes where it stopped instead of starting over.

Labs typically upload 16 files at a time, and up to 256 in a single batch. Progress and each file's status update in real time over WebSockets, and pre-validation quality checks run as soon as a file lands, so problems show up before analysis begins.
