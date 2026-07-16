import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Calendar, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { ChatMessage, ActiveTab } from '../types';

interface LiveChatProps {
  setCurrentTab: (tab: ActiveTab) => void;
}

export default function LiveChat({ setCurrentTab }: LiveChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [hasNewNotification, setHasNewNotification] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize greeting on mount
  useEffect(() => {
    setMessages([
      {
        id: 'msg-init',
        sender: 'agent',
        text: 'Hi there! I’m Chloe, your Bright Smile virtual Care Representative. How can I help you today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    // Set a subtle ping notification after 4 seconds
    const timer = setTimeout(() => {
      setHasNewNotification(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Simulate bot thinking response
    setTimeout(() => {
      let botResponse = '';
      const t = text.toLowerCase();

      if (t.includes('emerg') || t.includes('pain') || t.includes('hurt') || t.includes('ache')) {
        botResponse = 'For immediate dental emergencies (severe pain, swelling, bleeding, broken teeth), please dial our 24/7 clinical hotline directly at (800) 555-0199. Our on-duty surgeons are ready to accept walk-ins!';
      } else if (t.includes('book') || t.includes('appoint') || t.includes('sched') || t.includes('visit')) {
        botResponse = 'I can help you reserve a slot! Click "Book Appointment" in our secure portal, or would you like me to open the scheduling form for you?';
      } else if (t.includes('insur') || t.includes('cost') || t.includes('pay') || t.includes('price')) {
        botResponse = 'We accept 95% of major PPO dental insurances (Delta Dental, Aetna, Cigna, MetLife, BCBS, etc.) and file claims on your behalf! For self-pay patients, our Wellness Club offers exams, 3D scans, and cleanings for $349/year.';
      } else {
        botResponse = 'Thanks for reaching out! Dr. Sarah Mercer and our clinical team are dedicated to providing painless, luxury care. Would you like to schedule a visit or check our dental treatment options?';
      }

      const agentMsg: ChatMessage = {
        id: `agent-${Date.now()}`,
        sender: 'agent',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, agentMsg]);
    }, 1000);
  };

  const handleQuickAction = (action: 'book' | 'emergency' | 'insurance') => {
    if (action === 'book') {
      handleSendMessage('I would like to book an appointment');
      setTimeout(() => {
        setCurrentTab('book');
        setIsOpen(false);
      }, 1500);
    } else if (action === 'emergency') {
      handleSendMessage('What is your emergency line?');
    } else if (action === 'insurance') {
      handleSendMessage('Do you take my dental insurance?');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      
      {/* Dynamic floating launcher button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasNewNotification(false);
        }}
        className={`w-14 h-14 rounded-full bg-gradient-to-tr from-teal-500 to-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 hover:scale-105 transition-all cursor-pointer relative group`}
        id="btn-livechat-toggle"
        aria-label="Open clinical virtual assistant chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        
        {/* Subtle notification ping dot */}
        {hasNewNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500 border-2 border-white text-[8px] font-bold text-white items-center justify-center">1</span>
          </span>
        )}
      </button>

      {/* Embedded Chat Modal Widget */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-85 sm:w-96 max-w-[calc(100vw-2rem)] h-[480px] bg-white border border-slate-100 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left animate-fade-in">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold border border-teal-500/30">
                  <Sparkles size={16} />
                </div>
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1 leading-none">
                  <span>Chloe</span>
                  <span className="text-[9px] font-mono font-normal uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 px-1 py-0.2 rounded ml-1">Care Bot</span>
                </h4>
                <p className="text-[10px] text-slate-400 font-sans mt-1">Bright Smile Virtual Concierge</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
              id="btn-close-livechat-modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Secure disclaimer */}
          <div className="bg-slate-50 border-b border-slate-100 px-4 py-1.5 flex items-center justify-between text-[9px] text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck size={11} className="text-teal-500" />
              <span>HIPAA Compliant Session</span>
            </span>
            <span>ID: SF-{Date.now().toString().slice(-6)}</span>
          </div>

          {/* Message List Grid */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50/50 space-y-4">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div 
                  key={msg.id}
                  className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm font-sans ${
                    isUser
                      ? 'bg-slate-950 text-white rounded-br-none shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none shadow-sm'
                  }`}>
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    <span className="block text-[8px] sm:text-[9px] text-slate-400 font-mono mt-1 text-right">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions Suggestions buttons */}
          <div className="px-4 py-2 bg-slate-50/20 border-t border-slate-100 flex flex-wrap gap-1.5 justify-start">
            <button
              onClick={() => handleQuickAction('book')}
              className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100/80 border border-teal-200/40 rounded-full flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Calendar size={10} />
              <span>Book Appointment</span>
            </button>
            <button
              onClick={() => handleQuickAction('emergency')}
              className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100/80 border border-red-200/40 rounded-full flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Phone size={10} />
              <span>Emergency Line</span>
            </button>
            <button
              onClick={() => handleQuickAction('insurance')}
              className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/40 rounded-full transition-colors cursor-pointer"
            >
              <span>Insurance Carriers</span>
            </button>
          </div>

          {/* Input field actions */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            className="p-3 bg-white border-t border-slate-100 flex gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Chloe about treatments, pricing..."
              className="flex-1 px-3.5 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              id="input-livechat-message"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 bg-gradient-to-r from-teal-500 to-blue-600 disabled:from-slate-200 disabled:to-slate-300 text-white rounded-xl shadow transition-all cursor-pointer shrink-0"
              id="btn-livechat-send"
            >
              <Send size={16} />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
