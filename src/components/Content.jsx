import React from "react";
import img from "../assets/eleventh img.webp";
import img1 from "../assets/oneimg.gif";
import img2 from "../assets/ttwo img.webp";
import img3 from "../assets/third img.webp";
import img4 from "../assets/fourth img.webp";
import img5 from "../assets/fifth img.webp";
import img6 from "../assets/sixth img.gif";
import img7 from "../assets/seventh img.webp";
import img8 from "../assets/eight img.webp";
import img9 from "../assets/nineth img.gif";
import img10 from "../assets/tenth img.gif";
import img12 from "../assets/twelth img.webp";
import img13 from "../assets/thirteenth img.webp";
import img14 from "../assets/fourtheenth img.webp";
import img15 from "../assets/fiftheenth img.webp";


const Content = () => {
  return (
    <div>
       <div className="flex flex-col items-center px-6 sm:px-12 md:px-24 lg:px-48 xl:px-72 text-gray-800 ">
      {/* Intro */}
      <div className="text-center py-9 max-w-3xl">
        <p className="text-lg leading-relaxed">
          I designed a Helpdesk product during my time as design director at
          Capacity.
        </p>
      </div>

      {/* Middle Paragraph */}
      <div className="text-center py-2 max-w-2xl">
        <p className="text-base leading-relaxed">
          Helpdesk is a core part of the Capacity platform because support
          issues that cannot be resolved with automation must be escalated to a
          [human] agent. We spent a lot of effort building personas around the
          helpdesk agents so we could understand their needs.
        </p>
      </div>

      {/* Final Paragraph */}
      <div className="text-center py-6 max-w-2xl">
        <p className="text-base leading-relaxed">
          This wasn't a time-boxed project with a clear end date. Rather, this
          was work that evolved over time as we released an MVP to the market,
          observed how customers used it, and adjusted and iterated over time.
          The following shows, not all, but many of the features we designed and
          shipped to the delight of our customers.
        </p>
      </div>

      <div>
        <img src={img1} alt="" />
      </div>

      <div className="relative top-9">
        <img src={img2} alt="" srcset="" />
      </div>

      <div>
        <p className="text-center py-20 line-clamp-3 w-[36rem]">
          Helpdesk agents can add new Q&A to a knowledge base without leaving
          the helpdesk. The <span className="font-bold">inquiry</span> and{" "}
          <span className="font-bold">response</span> cards are the same
          component used in the{" "}
          <span className="relative right-56">knowledge base.</span>
        </p>
      </div>

      <div>
        <img src={img3} alt="" />
      </div>

      <div>
        <img src={img4} alt="" srcset="" />
      </div>

      <div className="text-center py-20 w-[36rem]">
        <p className="line-clamp-3">
          Helpdesk Message Composer UI - This part of the UI is a great example
          of when you need to pack a ton of important functionality in a
          relatively small space—all while making it look clean and enjoyable to
          use.
        </p>

        <p className="line-clamp-3 mt-4">
          Voice of Customer and competitor analysis made it clear that we were
          going to need to support public and private messages. There were
          concerns about mixing public and private messages in the same space
          because it may be hard to orient yourself in the conversation. I opted
          to use the tab component to bifurcate the experience at the highest
          level. User testing confirmed that this decision cut down on cognitive
          load because users can trust that everything in one area is public,
          and everything in another area is all private.
        </p>
      </div>

      <div>
        <img src={img5} alt="" srcset="" />
      </div>

      <div className=" w-[36rem] line-clamp-2 py-12">
        <p>
          <span className="font-bold">@mentions -</span> Search and tag users in
          helpdesk comments so that the recipient can be notified.
        </p>
      </div>

      <div>
        <img src={img6} alt="" />
      </div>
      <div className="w-[36rem] py-12">
        <p>
          Live Editing - Some user pain we uncovered was that there was no
          visibility into what agent(s) were working on a specific ticket. This
          often led to agents unknowingly editing a ticket at the same time, and
          that experience was confusing and frustrating if their work was undone
          or not saved.
        </p>

        <p className="mt-4">
          I designed options for how we might show user attribution during live
          editing of fields and situations where someone is actively typing in
          the message composer.
        </p>
      </div>

      <div className="">
        <img src={img7} alt="" />
      </div>

      <div>
        <img src={img8} alt="" srcset="" />
      </div>

      <div className="w-[36rem] py-12">
        <p>
          <span className="font-bold">Reorder and Rename Custom</span>
          <br /> Views As we interviewed helpdesk support agents we kept hearing
          a similar theme. In addition to the default filtered ticket views
          provided, agents wanted to create their own custom filtered views and
          be able to save the views.
        </p>

        <p className="mt-4">
          Not having to reconfigure special views several times a day gave a lot
          of time back to support agents.
        </p>
      </div>

      <div>
        <img src={img9} alt="" srcset="" className="rounded-md" />
        <br />
        <br />
        <br />
        <img src={img10} alt="" srcset="" className="rounded-md" />
      </div>

      <div className="mt-16 pr-48">
        <h3 className="font-bold text-2xl">
          That's it! Thanks for reading this far.
        </h3>
        <p className="mt-4">If you like this project, please hit that 🩷</p>
      </div>

      <div className="mt-32 flex items-center justify-center gap-6 w-full">
        {/* Left line */}
        <div className="flex-1 h-px bg-gray-300" />

        {/* Image */}
        <img src={img} alt="" className="rounded-full w-20 h-20 object-cover" />

        {/* Right line */}
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <div>
        <h3 className="mt-7 ml-24">Danny Amacher</h3>
        <p className="mt-2">SaaS Product Design + Design Systems 👋🏼 ✨</p>
      </div>
      <div>
        <button className="border-gray-950 bg-black text-white rounded-xl mt-3 p-2">
          Get in touch
        </button>
      </div>

      <div className=" flex gap-[52rem] ml-5 mt-7">
        <h4 className="font-bold text-sm">More by Danny Amacher</h4>
        <p>View profile</p>
        
      </div>

      <div className="flex gap-7 mt-4">
        <img src={img12} alt="" />
        <img src={img13} alt="" />
        <img src={img14} alt="" />
        <img src={img15} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Content

