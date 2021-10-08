---
title: 'Deep dive in Antivirus, Virus, Malware and system security'
date: 2021-10-07
published: true
---

# **System Security and Antivirus.**

Security of a system can be threatened via two violations:

1. Threat
2. Attack

**Threat**: it&#39;s a program or virus which has the power to damage your system seriously.
**Attack**: it&#39;s an attempt to break your security system and try to make unauthorized use of your data.

## Deep dive in Cyber Threats.

- A cyber or cybersecurity threat is a malicious program or virus that can cause damage to your system, steal your data or disrupt digital life in general.
- Cyber threats can include computer viruses, DDoS Attacks, and other attack vectors.

  <br/>

### What is a DDoS Attack?

- DoS means &quot;Distributed Denial of service (DDoS)&quot;, It&#39;s an illegal attempt to make the website unavailable by overloading its server with high amounts of fake traffic.

  <br/>

### What&#39;s the Difference Between a DoS attack and a DDoS Attack?

- In a DoS attack, malicious connection requests are sent from just one device but in a DDoS attack, malicious traffic is sent from multiple devices.

  <br/>

## Deep dive in Cyber Attack.

- A Cyberattack is an attempt to disable your system&#39;s antivirus or break a firewall then stealing your data on the dark web, or use a breached computer system to launch additional attacks.

  <br/>

## Some Types of Cyber Attacks.

  <br/>

### Malware

- Malware is a term that describes malicious software, including spyware, ransomware, and viruses. Typically when any user clicks on any dangerous links that they install viruses and spyware in your computer in the form of software or anything else.

### Phishing

- It&#39;s the method to send fraudulent communications that seem to come from any reputable source like email. The Goal of Phishing is to steal any sensitive data like credit cards, passwords, any other login information or to install malware on the client system.

### SQL injection

- What does it mean? It&#39;s a &quot;Structured Query Language (SQL)&quot;. SQL injections happen when an attacker directly inserts malicious code into the server that uses SQL and it forces the server to reveal any kind of sensitive information from a server that is normally private.

  <br/>

## Some Examples of a Cyber Attack.

Here are some examples of common cyber attacks.

- Identity theft, fraud.
- Malware, phishing, spamming, spyware, and virus.
- Password cracking
- Website overloading causes a crash of the website
- Private and public Web browser exploits
- Instant message abuse

  <br/>

## Tools we can use to prevent malware and cyber attacks.

- Identity and access management. (IAM)
- Firewalls
- Endpoint protection
- Antimalware
- Intrusion prevention/detection systems (IPS/IDS)
- Data loss prevention (DLP)
- Endpoint detection and response
- Security information and event management (SIEM)
- Encryption tools
- Vulnerability scanners
- Virtual Private network.
- Virtual Private servers. (VPNs)
- Cloud workload protection platform (CWPP)
- Cloud access security broker (CASB)

  <br/>

## Firewall.

### How does the Firewall work?

- When your computer has firewall protection, everything that the computer takes as an input is monitored. The firewall monitors all the information traffic to allow &quot;good data&quot; in and block all &quot;bad data&quot; from entering your computer.

- Firewalls use one or any big combination of some methods to control traffic flowing in and out of the network are listed below.

### Packet filtering

- The most basic form of firewall software uses predetermined security rules to create filters from bad data. If an incoming small chunk of data is flagged by filters it is not allowed to go through. Packets that make it through the filters are sent to the requesting system and all others are discarded.

### Proxy service

- A firewall proxy server is an application that acts as an intermediary between systems. Information from the internet is retrieved by the firewall and then sent to the requesting system and vice versa. Firewall proxy servers operate at the application layer of the firewall, where both ends of a connection are forced to conduct the session through the proxy. They operate by creating and running a process on the firewall that mirrors a service as if it were running on the end host and thus centralizes all information transfer for an activity to the firewall for scanning.

  <br/>

### Stateful inspection

- The most modern method of firewall scanning that doesn&#39;t rely on the memory-intensive examination of all - information packets is &quot;stateful inspection&quot;. A &quot;stateful&quot; firewall holds significant attributes of each connection in a database of trusted information, for the duration of the session. These attributes, which are collectively known as the &quot;state&quot; of the connection, may include such details as the IP addresses and ports involved in the connection and the sequence numbers of the packets being transferred. The firewall compares information being transferred to the copy relevant to that transfer held in the database. if the comparison yields a positive match the information is allowed through, otherwise, it is denied.

  <br/>

### Types of Firewall.

There are two types of firewalls,

1. Software firewall
2. Hardware firewall

This is the image that represents how a firewall does its work between &quot;LAN&quot; and &quot;WAN&quot;.

The image took from [Google](https://www.google.com/search?hl=en-IN&sxsrf=AOaemvIjEn-kw3fyd1gg2_SMdXgMRiI3fQ:1633615833299&q=does+a+firewall+work&tbm=isch&source=iu&ictx=1&tbs=simg:CAESjQIJTdfHeV4raWkagQILELCMpwgaOgo4CAQSFK0-vA6xEeoDjwzKKcUVoiKKKss6GhqhlD4mBEb1dUlyhSe-apOBlJh665Af5LpyLSAFMAQMCxCOrv4IGgoKCAgBEgQdh8sVDAsQne3BCRqhAQobCgh2ZXJ0aWNhbNqliPYDCwoJL2EvNGhoM3AwCh0KCmhvcml6b250YWzapYj2AwsKCS9hLzJtcXZ6YworChd0ZWNobm9sb2d5IGFwcGxpY2F0aW9uc9qliPYDDAoKL20vMGMwc3E5dAoaCgdkaWFncmFt2qWI9gMLCgkvbS8wMnYwbTIKGgoIc29mdHdhcmXapYj2AwoKCC9tLzAxbWYwDA&fir=wjohKo9_af0EkM%252CvKT29Ibsn_5SQM%252C_&vet=1&usg=AI4_-kRHHa2CmHuZ_Dr9qR1zI3SUbo3t2Q&sa=X&ved=2ahUKEwj8p8WbvbjzAhUkmeYKHXlFBQgQ9QF6BAgaEAE&biw=1360&bih=617&dpr=1#imgrc=wjohKo9_af0EkM)

<br/>

### Hardware Firewall

- This is built into a network device like a router and this can protect every single machine on a network and it requires a little bit of configuration to work effectively. They use packet filtering technique to examine the header of packet m determining his source and destination and then, comparing the data set of predefined rules, they decide whether to drop the packet or forward to the next step or its destination.

### Software Firewall

- This is the most popular and user-friendly network protection method for home users. They usually come as a stand-alone application or as part of complete antivirus protection software such as Avast, McAfee Malwarebytes, Bitdefender, and much more. Using these types of firewalls can protect you and your system from Trojan, Worm, or any kind of malicious things, and this software allows various options of control over its functions and features.

### Find the best software for your system?

- A reliable software firewall should run in the background of your system and leave a small print on overall system performance by using a few of its resources. The firewall software must be regularly updated to keep with the latest technological improvements and provide effective protection against network attack tactics.

  <br/>

## Deep dive in Computer Virus.

  <br/>
  
### What is a computer virus?

- A computer virus is a malicious piece of computer code designed to spread from device to device. A subset of malware, these self-copying threats are usually designed to damage a device or steal data from the device.

- Think of a Biological virus that makes you sick. It&#39;s persistently nasty, keeps you from functioning normally, and often requires something powerful to get rid of it. A computer virus is very similar to it. It is designed to replicate constantly and infect your computer data like files, programs, browsers, and other things and it makes your computer operate or stop from working together.

### What does a computer virus do?

- Some computer viruses are programmed to harm your computer by corrupting programs, deleting files, or formatting the hard drive. Other viruses just duplicate themselves or flood the network with traffic which makes it impossible to perform any internet activity, Even less harmful viruses can disrupt your system&#39;s performance, decreasing memory and causing computer crashes.

- In 2013 the botnet virus Gameover ZueS was discovered to use peer-to-peer downloading sites to distribute ransomware and commit bank fraud. While tens of thousands of computer viruses still roam the internet, they have found their method and they are now joined by several malware variants like Worms, Trojans, Ransomware.

### How does a computer get a virus?

Even if you are very very careful still you can pick any computer viruses through normal web activities like,

- Sharing music, files, or photos with other computers.
- Visiting non protected websites,
- Opening any kind of Spam emails or any email attachments.
- Downloading free games, toolbars, media players, and other system utilities.
- Installing mainstream software applications without thoroughly reading license agreements.
- Installing Paid software without paying and downloading from any crack software or pirating that software.

### What are the symptoms of a computer virus?

- Slow computer performance.
- Erratic computer behavior
- Unexplained data loss.
- Frequent computer crashes
- Automatically installing software
- Automatically spamming mails.

### Computer Virus Protection?

- Use antivirus and firewall
- Get antispyware
- Always keep your antivirus protection on
- Update your operating system regularly
- Increase your browser security settings
- Avoid suspicious websites
- Only download genuine software

Using https:// websites are most secure and protected with SSL
Certificates.

<br/>

## Antivirus Softwares

Antivirus is one of the most important things you can have in your system to protect your system from Malware and Viruses

### How does Antivirus Software work?

- Antivirus software usually works on two principles, Either it scans programs and files as they enter your device and compares them to know if it is a virus or not, or it scans programs already on your device looking for any suspicious behavior. In Addition, most antivirus gives us the option to remove or quarantine viruses or malware.

### What is Antivirus software?

- As the name says, antivirus is software that is created to protect the system from viruses and malware. It works in three easy simple steps.

1. Searching for viruses in computer
2. Confirming the virus
3. Removing the virus
4. Making your system safe

### Just what is Virus and how does it work?

- The term &quot;Virus&quot; refers to a specific class of malware that infects a device and duplicates itself, attacking other programs and inserting its own code. It changes the way these programs behave. The way viruses attack humans, early programmers decided to call it &quot;Virus&quot;.

### Antivirus Features.

As you might expect, different antivirus packages come with different features.

- **Manual scanning** : Manual scanning means you can start a scan for any malware, virus anytime you want.
- **On-access scanning** : This type of scanning begins whenever you open the antivirus software usually upon device startup.
- **Scheduled scans** : Some software gives you the option to schedule scans for regular times each day or week. Like on-access scans.
- **Quick scans** : Quick scans check commonly used areas of the device such as temporary files, operating system directory, and the computer memory, as it doesn&#39;t scan everything on your device, they typically take less than 30min to finish the scan.
- **Full scan** : A full-system scan can take significantly longer to complete than a quick scan because it looks at absolutely every part of your device, including external devices and files.
- **Firewall** : This security feature comes bundled with some antivirus software programs. Essentially, a firewall is a wall or barrier between the internet and your device. It monitors all incoming traffic and allows or blocks it based on the security settings you&#39;ve chosen.
- **Automatic updates** : This refers to how regularly an antivirus package updates its virus and malware definitions. Frequent or continuous updates mean the software is more likely to detect malware based on signatures or heuristics.

### Which is the Best Antivirus?

- If you are using Windows 8, Windows 10, or Windows 11 then you don&#39;t need to worry about anti-virus software. Windows 8 or later already comes with inbuilt anti-virus software which is &quot;Windows Defender&quot;.
- it uses all the latest technologies of any best antivirus which is enough for your computer. It comes with every single feature which comes in all the best and reliable antivirus software.

<br/>

## Free vs. Paid Antivirus Software.

A simple internet search will turn up dozens of free antivirus packages. Just how good are these free versions, and should you consider downloading one if you&#39;re short on cash? As it happens, there are some free antivirus programs that offer decent, basic protection against common viruses and malware. [Kaspersky](https://www.security.org/antivirus/kaspersky/), [Bitdefender](https://www.security.org/antivirus/bitdefender/), and [Avast](https://www.security.org/antivirus/avast/), for example, all offer solid free versions of their software. You should know, though, that paid software almost always offers more in-depth protection than free versions. These are some common limitations of free antivirus software:

- No behavior-based scanning
- Coverage for only one device
- Lack of availability for some operating systems
- Infrequent virus definition updates
- No firewalls
- The possibility your data will be sold
- Poor or no customer support
- Fewer or no extra features
- Frequent ads for paid products

### How to remove viruses on windows devices?

1. Restart your device in safe mode.
2. Navigate to your Task Manager.
3. Click the Processes tab.
4. Check for any unusual programs.
5. Once you&#39;ve identified the malware program, click End Task.
6. Click File.
7. Click Run New Task.
8. Type the MSConfig in the box.
9. Click OK.
10. Go to the Service tab.
11. Uncheck the suspicious service.
12. Click Apply.
13. Click OK.
14. Restart your device normally.

    <br/>

### How to remove viruses on Mac devices?

1. Restart your device in safe mode.
2. Navigate to Launchpad.
3. Open the Activity Monitor.
4. Check for any unusual programs.
5. Once you&#39;ve identified the malware program, click the X in the top-left area of the window.
6. Open your Finder.
7. Go to Applications.
8. Look for suspicious apps.
9. Once you&#39;ve identified a suspicious app, drag it to the trash.
10. Empty the trash.
11. Restart the device normally.

    <br/>

### How to remove viruses on Android devices?

1. Restart your device in safe mode.
2. Navigate to your device&#39;s Settings app.
3. Choose Apps.
4. Choose Downloaded.
5. Check for any unusual apps.
6. Once you&#39;ve identified the malware, tap its name.
7. Choose Uninstall on the app&#39;s info page.
8. Restart the device normally.

   <br/>

### Conclusion

Antivirus software scans your device for malware and, once it detects it, deletes or quarantines it. While many devices now come with some antivirus software pre-installed, it&#39;s always a good idea to consider additional software to cover any vulnerabilities. Finally, keep in mind that antivirus doesn&#39;t protect you from every online threat. You should also think about adding a VPN to keep you safe.
